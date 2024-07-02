<template>
  <div class="bg-gray-300 justify-center w-full min-h-[--adjusted-height] pt-[--header-height]">
    <Card class="relative shadow-lg max-w-4xl h-[1050px] p-6 my-6">
      <CardHeader>
        <CardTitle class="text-2xl w-full text-right font-bold mb-4">INVOICE</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="absolute top-8 left-8">
            <div class="w-32 h-32 bg-gray-400 flex items-center justify-center rounded">
              <span class="text-white text-2xl">+</span>
            </div>
          </div>
        <div class="flex justify-end mb-6">
          <div class="flex flex-col">
            <Input v-model="invoice.email" placeholder="Email" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.phone" placeholder="Phone" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.abn" placeholder="ABN" class="border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        <div class="flex justify-between mb-6">
          <div class="flex flex-col w-1/2 pr-6">
            <Label>Bill to:</Label>
            <Input v-model="invoice.clientCompany" placeholder="Company name" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.clientAddress1" placeholder="Address line 1" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.clientAddress2" placeholder="Address line 2" class="border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
          </div>
          <div class="flex flex-col w-1/2 pl-6 text-right">
            <Input v-model="invoice.invoiceNumber" placeholder="Invoice #" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.invoiceDate" placeholder="Invoice Date" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            <Input v-model="invoice.workOrder" placeholder="Work Order" class="border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        <div class="mb-6">
          <Table class="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Item Description</TableHead>
                <TableHead>Qty.</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Tax</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(item, index) in invoice.items" :key="index">
                <TableCell><Input v-model="item.description" placeholder="Enter item name/description" class="border-gray-300 focus:ring-2 focus:ring-blue-500" /></TableCell>
                <TableCell><Input type="number" v-model.number="item.qty" @input="updateAmount(index)" placeholder="0" class="border-gray-300 focus:ring-2 focus:ring-blue-500" /></TableCell>
                <TableCell><Input type="number" v-model.number="item.rate" @input="updateAmount(index)" placeholder="0.00" class="border-gray-300 focus:ring-2 focus:ring-blue-500" /></TableCell>
                <TableCell>{{ invoice.taxEnabled ? calculateTax(item.amount) : 0.00 }}</TableCell>
                <TableCell>{{ item.amount.toFixed(2) }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button @click="addItem" class="mt-4 bg-blue-500 text-white hover:bg-blue-600">New line</Button>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-6">
          <div>
            <Label>Notes:</Label>
            <Textarea v-model="invoice.notes" placeholder="It was great doing business with you." class="border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="text-right">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>{{ subTotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax (10%):</span>
              <span>{{ totalTax.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between font-bold">
              <span>Total:</span>
              <span>{{ total.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <Label>Bank name:</Label>
              <Input v-model="invoice.bankName" placeholder="Bank name" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
              <Label>Account number:</Label>
              <Input v-model="invoice.accountNumber" placeholder="Account number" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            </div>
            <div class="flex flex-col text-right">
              <Label>BSB number:</Label>
              <Input v-model="invoice.bsbNumber" placeholder="BSB number" class="mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
              <Label>Account name:</Label>
              <Input v-model="invoice.accountName" placeholder="Account name" class="border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out" />
            </div>
          </div>
          <div class="text-center mt-4 text-green-500 text-2xl font-bold">
            Thank You!
          </div>
        </div>

        <div class="mt-6 flex gap-4">
          <Button @click="saveInvoice" class="bg-green-500 text-white hover:bg-green-600">Save online</Button>
          <Button @click="downloadInvoice" class="bg-blue-500 text-white hover:bg-blue-600">Download/Print</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const invoice = ref({
  email: '',
  phone: '',
  abn: '',
  clientCompany: '',
  clientAddress1: '',
  clientAddress2: '',
  invoiceNumber: '',
  invoiceDate: '',
  workOrder: '',
  taxEnabled: true,
  items: [
    { description: '', qty: 1, rate: 0, amount: 0 },
  ],
  notes: '',
  bankName: '',
  accountNumber: '',
  bsbNumber: '',
  accountName: '',
});

const updateAmount = (index) => {
  const item = invoice.value.items[index];
  item.amount = parseFloat((item.qty * item.rate).toFixed(2));
};

const calculateTax = (amount) => {
  return parseFloat((invoice.value.taxEnabled ? amount * 0.10 : 0).toFixed(2));
};

const addItem = () => {
  invoice.value.items.push({ description: '', qty: 1, rate: 0, amount: 0 });
};

const saveInvoice = () => {
  // Implement save functionality
};

const downloadInvoice = () => {
  const element = document.querySelector('.container');
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('invoice.pdf');
  });
};

const subTotal = computed(() => {
  return invoice.value.items.reduce((acc, item) => acc + item.amount, 0);
});

const totalTax = computed(() => {
  return parseFloat((invoice.value.taxEnabled ? subTotal.value * 0.10 : 0).toFixed(2));
});

const total = computed(() => {
  return parseFloat((subTotal.value + totalTax.value).toFixed(2));
});
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply bg-blue-600;
}
</style>