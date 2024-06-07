<template>
  <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen">
    <div class="flex items-center justify-center py-12 px-4 mx-auto">
      <div class="mx-auto grid w-[350px] gap-6">
        <router-link to="/">
          <Button class="absolute top-2 left-2 z-20">Return Home</Button>
        </router-link>
        <router-link to="/">
          <Button class="absolute top-2 right-2 z-20">Dark Mode</Button>
        </router-link>
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold mb-6">Sign up</h1>
          <p class="text-balance text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <form class="grid gap-4" @submit.prevent="handleSignUp">
          <div class="grid gap-2">
            <Label for="userName">Username</Label>
            <Input id="userName" type="text" autocomplete="username" placeholder="AwesomeUser24" required v-model="userName" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="firstName">First Name</Label>
              <Input id="firstName" type="text" autocomplete="given-name" placeholder="John" required v-model="firstName" />
            </div>
            <div class="grid gap-2">
              <Label for="lastName">Last Name</Label>
              <Input id="lastName" type="text" autocomplete="family-name" placeholder="Appleseed" required v-model="lastName" />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="emailAddress">Email</Label>
            <Input id="emailAddress" type="email" autocomplete="email" placeholder="JohnAppleseed@email.com" required v-model="emailAddress" />
          </div>
          <div class="grid gap-2">
            <Label for="country">Country</Label>
            <Select v-model="selectedCountry">
              <SelectTrigger>
                <SelectValue placeholder="Select your Country" class="text-gray-500">{{ displaySelectedCountry }}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="country in countries" :key="country.code" :value="country.code">
                  {{ country.label }} ({{ country.value }})
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="grid gap-2">
            <Label for="phoneNumber">Phone Number</Label>
            <div class="relative">
              <span class="absolute left-3 top-[19px] transform -translate-y-1/2 text-gray-500 text-sm">{{ callCode || '+61' }}</span>
              <Input
                id="phoneNumber"
                type="tel"
                autocomplete="tel"
                placeholder="0412 345 678"
                required
                v-model="phoneNumber"
                :class="phonePadding"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" autocomplete="new-password" placeholder="Password" required v-model="password" />
            </div>
            <div class="grid gap-2">
              <Label for="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" autocomplete="new-password" placeholder="Password" required v-model="confirmPassword" />
            </div>
          </div>
          <Button type="submit" class="w-full">
            Sign up
          </Button>
          <Button variant="outline" class="w-full" @click.prevent="handleGoogleSignUp">
            Sign up with Google
          </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <router-link to="/login" class="underline">
            Login
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-gray-500 lg:block relative overflow-hidden">
      <transition name="fade" mode="in-out" :enter-active-class="'transition-opacity duration-1000'" :leave-active-class="'transition-opacity duration-1000'" :enter-from-class="'opacity-0'" :leave-to-class="'opacity-0'">
        <img :key="currentImage" :src="currentImage" alt="Current Image" class="object-cover w-full h-full absolute inset-0" />
      </transition>
      <img :src="nextImage" alt="Next Image" class="object-cover w-full h-full absolute inset-0 opacity-0" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'vue-sonner';
import axios from 'axios';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const currentImage = ref(`https://source.unsplash.com/random/3`);
const nextImage = ref(`https://source.unsplash.com/random/4`);
const firstName = ref('');
const lastName = ref('');
const userName = ref('');
const emailAddress = ref('');
const phoneNumber = ref('');
const dateOfBirth = ref('');
const password = ref('');
const confirmPassword = ref('');
const selectedCountry = ref('');

const countries = ref([
  { label: 'Afghanistan', value: '+93', code: 'AF' },
  { label: 'Albania', value: '+355', code: 'AL' },
  { label: 'Algeria', value: '+213', code: 'DZ' },
  { label: 'Andorra', value: '+376', code: 'AD' },
  { label: 'Angola', value: '+244', code: 'AO' },
  { label: 'Argentina', value: '+54', code: 'AR' },
  { label: 'Armenia', value: '+374', code: 'AM' },
  { label: 'Australia', value: '+61', code: 'AU' },
  { label: 'Austria', value: '+43', code: 'AT' },
  { label: 'Azerbaijan', value: '+994', code: 'AZ' },
  { label: 'Bahrain', value: '+973', code: 'BH' },
  { label: 'Bangladesh', value: '+880', code: 'BD' },
  { label: 'Belarus', value: '+375', code: 'BY' },
  { label: 'Belgium', value: '+32', code: 'BE' },
  { label: 'Belize', value: '+501', code: 'BZ' },
  { label: 'Benin', value: '+229', code: 'BJ' },
  { label: 'Bhutan', value: '+975', code: 'BT' },
  { label: 'Bolivia', value: '+591', code: 'BO' },
  { label: 'Bosnia and Herzegovina', value: '+387', code: 'BA' },
  { label: 'Botswana', value: '+267', code: 'BW' },
  { label: 'Brazil', value: '+55', code: 'BR' },
  { label: 'Brunei', value: '+673', code: 'BN' },
  { label: 'Bulgaria', value: '+359', code: 'BG' },
  { label: 'Burkina Faso', value: '+226', code: 'BF' },
  { label: 'Burundi', value: '+257', code: 'BI' },
  { label: 'Cambodia', value: '+855', code: 'KH' },
  { label: 'Cameroon', value: '+237', code: 'CM' },
  { label: 'Canada', value: '+1', code: 'CA' },
  { label: 'Cape Verde', value: '+238', code: 'CV' },
  { label: 'Central African Republic', value: '+236', code: 'CF' },
  { label: 'Chad', value: '+235', code: 'TD' },
  { label: 'Chile', value: '+56', code: 'CL' },
  { label: 'China', value: '+86', code: 'CN' },
  { label: 'Colombia', value: '+57', code: 'CO' },
  { label: 'Comoros', value: '+269', code: 'KM' },
  { label: 'Congo', value: '+242', code: 'CG' },
  { label: 'Costa Rica', value: '+506', code: 'CR' },
  { label: 'Croatia', value: '+385', code: 'HR' },
  { label: 'Cuba', value: '+53', code: 'CU' },
  { label: 'Cyprus', value: '+357', code: 'CY' },
  { label: 'Czech Republic', value: '+420', code: 'CZ' },
  { label: 'Denmark', value: '+45', code: 'DK' },
  { label: 'Djibouti', value: '+253', code: 'DJ' },
  { label: 'Dominica', value: '+1-767', code: 'DM' },
  { label: 'Dominican Republic', value: '+1-809', code: 'DO' },
  { label: 'East Timor', value: '+670', code: 'TL' },
  { label: 'Ecuador', value: '+593', code: 'EC' },
  { label: 'Egypt', value: '+20', code: 'EG' },
  { label: 'El Salvador', value: '+503', code: 'SV' },
  { label: 'Equatorial Guinea', value: '+240', code: 'GQ' },
  { label: 'Eritrea', value: '+291', code: 'ER' },
  { label: 'Estonia', value: '+372', code: 'EE' },
  { label: 'Eswatini', value: '+268', code: 'SZ' },
  { label: 'Ethiopia', value: '+251', code: 'ET' },
  { label: 'Fiji', value: '+679', code: 'FJ' },
  { label: 'Finland', value: '+358', code: 'FI' },
  { label: 'France', value: '+33', code: 'FR' },
  { label: 'Gabon', value: '+241', code: 'GA' },
  { label: 'Gambia', value: '+220', code: 'GM' },
  { label: 'Georgia', value: '+995', code: 'GE' },
  { label: 'Germany', value: '+49', code: 'DE' },
  { label: 'Ghana', value: '+233', code: 'GH' },
  { label: 'Greece', value: '+30', code: 'GR' },
  { label: 'Grenada', value: '+1-473', code: 'GD' },
  { label: 'Guatemala', value: '+502', code: 'GT' },
  { label: 'Guinea', value: '+224', code: 'GN' },
  { label: 'Guinea-Bissau', value: '+245', code: 'GW' },
  { label: 'Guyana', value: '+592', code: 'GY' },
  { label: 'Haiti', value: '+509', code: 'HT' },
  { label: 'Honduras', value: '+504', code: 'HN' },
  { label: 'Hungary', value: '+36', code: 'HU' },
  { label: 'Iceland', value: '+354', code: 'IS' },
  { label: 'India', value: '+91', code: 'IN' },
  { label: 'Indonesia', value: '+62', code: 'ID' },
  { label: 'Iran', value: '+98', code: 'IR' },
  { label: 'Iraq', value: '+964', code: 'IQ' },
  { label: 'Ireland', value: '+353', code: 'IE' },
  { label: 'Israel', value: '+972', code: 'IL' },
  { label: 'Italy', value: '+39', code: 'IT' },
  { label: 'Jamaica', value: '+1-876', code: 'JM' },
  { label: 'Japan', value: '+81', code: 'JP' },
  { label: 'Jordan', value: '+962', code: 'JO' },
  { label: 'Kazakhstan', value: '+7', code: 'KZ' },
  { label: 'Kenya', value: '+254', code: 'KE' },
  { label: 'Kiribati', value: '+686', code: 'KI' },
  { label: 'Kosovo', value: '+383', code: 'XK' },
  { label: 'Kuwait', value: '+965', code: 'KW' },
  { label: 'Kyrgyzstan', value: '+996', code: 'KG' },
  { label: 'Laos', value: '+856', code: 'LA' },
  { label: 'Latvia', value: '+371', code: 'LV' },
  { label: 'Lebanon', value: '+961', code: 'LB' },
  { label: 'Lesotho', value: '+266', code: 'LS' },
  { label: 'Liberia', value: '+231', code: 'LR' },
  { label: 'Libya', value: '+218', code: 'LY' },
  { label: 'Liechtenstein', value: '+423', code: 'LI' },
  { label: 'Lithuania', value: '+370', code: 'LT' },
  { label: 'Luxembourg', value: '+352', code: 'LU' },
  { label: 'Madagascar', value: '+261', code: 'MG' },
  { label: 'Malawi', value: '+265', code: 'MW' },
  { label: 'Malaysia', value: '+60', code: 'MY' },
  { label: 'Maldives', value: '+960', code: 'MV' },
  { label: 'Mali', value: '+223', code: 'ML' },
  { label: 'Malta', value: '+356', code: 'MT' },
  { label: 'Marshall Islands', value: '+692', code: 'MH' },
  { label: 'Mauritania', value: '+222', code: 'MR' },
  { label: 'Mauritius', value: '+230', code: 'MU' },
  { label: 'Mexico', value: '+52', code: 'MX' },
  { label: 'Micronesia', value: '+691', code: 'FM' },
  { label: 'Moldova', value: '+373', code: 'MD' },
  { label: 'Monaco', value: '+377', code: 'MC' },
  { label: 'Mongolia', value: '+976', code: 'MN' },
  { label: 'Montenegro', value: '+382', code: 'ME' },
  { label: 'Morocco', value: '+212', code: 'MA' },
  { label: 'Mozambique', value: '+258', code: 'MZ' },
  { label: 'Myanmar', value: '+95', code: 'MM' },
  { label: 'Namibia', value: '+264', code: 'NA' },
  { label: 'Nauru', value: '+674', code: 'NR' },
  { label: 'Nepal', value: '+977', code: 'NP' },
  { label: 'Netherlands', value: '+31', code: 'NL' },
  { label: 'New Zealand', value: '+64', code: 'NZ' },
  { label: 'Nicaragua', value: '+505', code: 'NI' },
  { label: 'Niger', value: '+227', code: 'NE' },
  { label: 'Nigeria', value: '+234', code: 'NG' },
  { label: 'North Korea', value: '+850', code: 'KP' },
  { label: 'North Macedonia', value: '+389', code: 'MK' },
  { label: 'Norway', value: '+47', code: 'NO' },
  { label: 'Oman', value: '+968', code: 'OM' },
  { label: 'Pakistan', value: '+92', code: 'PK' },
  { label: 'Palau', value: '+680', code: 'PW' },
  { label: 'Palestine', value: '+970', code: 'PS' },
  { label: 'Panama', value: '+507', code: 'PA' },
  { label: 'Papua New Guinea', value: '+675', code: 'PG' },
  { label: 'Paraguay', value: '+595', code: 'PY' },
  { label: 'Peru', value: '+51', code: 'PE' },
  { label: 'Philippines', value: '+63', code: 'PH' },
  { label: 'Poland', value: '+48', code: 'PL' },
  { label: 'Portugal', value: '+351', code: 'PT' },
  { label: 'Qatar', value: '+974', code: 'QA' },
  { label: 'Romania', value: '+40', code: 'RO' },
  { label: 'Russia', value: '+7', code: 'RU' },
  { label: 'Rwanda', value: '+250', code: 'RW' },
  { label: 'Saint Kitts and Nevis', value: '+1-869', code: 'KN' },
  { label: 'Saint Lucia', value: '+1-758', code: 'LC' },
  { label: 'Saint Vincent and the Grenadines', value: '+1-784', code: 'VC' },
  { label: 'Samoa', value: '+685', code: 'WS' },
  { label: 'San Marino', value: '+378', code: 'SM' },
  { label: 'Sao Tome and Principe', value: '+239', code: 'ST' },
  { label: 'Saudi Arabia', value: '+966', code: 'SA' },
  { label: 'Senegal', value: '+221', code: 'SN' },
  { label: 'Serbia', value: '+381', code: 'RS' },
  { label: 'Seychelles', value: '+248', code: 'SC' },
  { label: 'Sierra Leone', value: '+232', code: 'SL' },
  { label: 'Singapore', value: '+65', code: 'SG' },
  { label: 'Slovakia', value: '+421', code: 'SK' },
  { label: 'Slovenia', value: '+386', code: 'SI' },
  { label: 'Solomon Islands', value: '+677', code: 'SB' },
  { label: 'Somalia', value: '+252', code: 'SO' },
  { label: 'South Africa', value: '+27', code: 'ZA' },
  { label: 'South Korea', value: '+82', code: 'KR' },
  { label: 'South Sudan', value: '+211', code: 'SS' },
  { label: 'Spain', value: '+34', code: 'ES' },
  { label: 'Sri Lanka', value: '+94', code: 'LK' },
  { label: 'Sudan', value: '+249', code: 'SD' },
  { label: 'Suriname', value: '+597', code: 'SR' },
  { label: 'Sweden', value: '+46', code: 'SE' },
  { label: 'Switzerland', value: '+41', code: 'CH' },
  { label: 'Syria', value: '+963', code: 'SY' },
  { label: 'Taiwan', value: '+886', code: 'TW' },
  { label: 'Tajikistan', value: '+992', code: 'TJ' },
  { label: 'Tanzania', value: '+255', code: 'TZ' },
  { label: 'Thailand', value: '+66', code: 'TH' },
  { label: 'Togo', value: '+228', code: 'TG' },
  { label: 'Tonga', value: '+676', code: 'TO' },
  { label: 'Trinidad and Tobago', value: '+1-868', code: 'TT' },
  { label: 'Tunisia', value: '+216', code: 'TN' },
  { label: 'Turkey', value: '+90', code: 'TR' },
  { label: 'Turkmenistan', value: '+993', code: 'TM' },
  { label: 'Tuvalu', value: '+688', code: 'TV' },
  { label: 'Uganda', value: '+256', code: 'UG' },
  { label: 'Ukraine', value: '+380', code: 'UA' },
  { label: 'United Arab Emirates', value: '+971', code: 'AE' },
  { label: 'United Kingdom', value: '+44', code: 'UK' },
  { label: 'United States', value: '+1', code: 'US' },
  { label: 'Uruguay', value: '+598', code: 'UY' },
  { label: 'Uzbekistan', value: '+998', code: 'UZ' },
  { label: 'Vanuatu', value: '+678', code: 'VU' },
  { label: 'Vatican City', value: '+379', code: 'VA' },
  { label: 'Venezuela', value: '+58', code: 'VE' },
  { label: 'Vietnam', value: '+84', code: 'VN' },
  { label: 'Yemen', value: '+967', code: 'YE' },
  { label: 'Zambia', value: '+260', code: 'ZM' },
  { label: 'Zimbabwe', value: '+263', code: 'ZW' }
]);

const phonePadding = computed(() => {
  const countryCodeLength = callCode.value ? callCode.value.length : 0;
  switch (countryCodeLength) {
    case 2:
      return 'pl-7';
    case 3:
      return 'pl-9';
    case 4:
      return 'pl-11';
    case 5:
      return 'pl-12';
    case 6:
      return 'pl-[52px]';
    default:
      return 'pl-9';
  }
});

const formattedPhoneNumber = computed(() => {
  if (selectedCountry.value && phoneNumber.value) {
    let formattedNumber = phoneNumber.value.replace(/\s+/g, '');
    if (formattedNumber.startsWith('0')) {
      formattedNumber = formattedNumber.substring(1);
    }
    return `${callCode.value}${formattedNumber}`;
  }
  return phoneNumber.value ? phoneNumber.value.replace(/\s+/g, '').replace(/^0/, '') : '';
});

const displaySelectedCountry = computed(() => {
  const country = countries.value.find(c => c.code === selectedCountry.value);
  return country ? `${country.label} (${country.value})` : '';
});

const callCode = computed(() => {
  const country = countries.value.find(c => c.code === selectedCountry.value);
  return country ? country.value : '';
});

const changeImage = () => {
  nextImage.value = `https://source.unsplash.com/random/${Date.now()}`;
  const temp = currentImage.value;
  currentImage.value = nextImage.value;
  nextImage.value = temp;
};

onMounted(() => {
  setInterval(changeImage, 8000);
});

const handleSignUp = async () => {
  try {
    console.log('Initiating user sign up');
    const response = await axios.post('https://us-central1-maso-au.cloudfunctions.net/createUser', {
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      emailAddress: emailAddress.value,
      phoneNumber: formattedPhoneNumber.value,
      dateOfBirth: dateOfBirth.value,
      password: password.value,
    });
    console.log('Sign up successful', response.data);
    toast.success('Sign up successful! Email verification sent.');
  } catch (error) {
    console.error('Error during sign up:', error);
    toast.error(error.response ? error.response.data : error.message);
  }
};

const handleGoogleSignUp = async () => {
  try {
    console.log('Initiating Google sign up');
    await signInWithGoogle();
    console.log('Google sign up successful');
    toast.success('Sign up successful!');
  } catch (error) {
    console.error('Error during Google sign up:', error);
    toast.error(error.message);
  }
};
</script>
