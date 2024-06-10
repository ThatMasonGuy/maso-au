<template>
    <div :class="['wave-divider', { 'is-mask': mask }]" :style="waveStyles">
      <svg :viewBox="viewBox" preserveAspectRatio="none">
        <defs>
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feFlood flood-color="rgba(0,0,0,0.25)"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path :d="wavePath" :fill="color" :filter="dropShadow ? 'url(#dropshadow)' : ''"/>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WaveDivider',
    props: {
      mask: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '#FFF5EE',
      },
      dropShadow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      viewBox() {
        return '0 0 1200 134';
      },
      waveStyles() {
        return {
          position: this.mask ? 'absolute' : 'relative',
          bottom: this.mask ? '-1px' : '0',
          width: '100%',
          height: this.mask ? '160px' : '134px',
          overflow: 'hidden',
        };
      },
      wavePath() {
        return this.generateWavePath();
      },
    },
    methods: {
      generateWavePath() {
        const height = this.mask ? 160 : 134;
        const minHeight = 30; // Minimum height for peaks
        const maxHeight = height - minHeight;
        const wavePoints = [
          [0, height],
          [50, height - 6],
          [100, height - 12],
          [200, height - 24],
          [300, height - 48],
          [400, height - 72],
          [500, height - 108],
          [600, height - 96],
          [700, height - 84],
          [800, height - 24],
          [900, height - 6],
          [1000, height - 24],
          [1100, height - 10],
          [1150, height - 30],
          [1200, height - 36],
          [1200, height],
          [1150, height],
          [1100, height],
          [1000, height],
          [900, height],
          [800, height],
          [700, height],
          [600, height],
          [500, height],
          [400, height],
          [300, height],
          [200, height],
          [100, height],
          [50, height],
          [0, height]
        ];
  
        return wavePoints.map((point, i) => `${i === 0 ? 'M' : 'L'}${point[0]} ${point[1]}`).join(' ') + ' Z';
      },
    },
  };
  </script>
  
  <style scoped>
  .wave-divider {
    width: 100%;
    position: relative;
  }
  
  .wave-divider svg {
    width: 100%;
    height: 134px;
  }
  
  .wave-divider.is-mask svg {
    height: 160px;
  }
  
  @media (max-width: 850px) {
    .wave-divider svg {
      height: 65px;
    }
    .wave-divider.is-mask svg {
      height: 65px;
    }
  }
  </style>
  