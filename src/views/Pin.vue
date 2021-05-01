<template>
  <div class="nk-block nk-block-middle nk-auth-body">
    <pin-logo></pin-logo>
    <b-card no-body>
      <div class="card-inner card-inner-lg">
        <div class="nk-block-head">
          <div class="nk-block-head-content">
            <b-container fluid style="padding-left: 0">
              <b-row align-v="center">
                <b-col cols="12" class="mb-4 text-center text-primary">
                  <div class="pb-2 pt-2 pl-2 pr-2 pin-code-background" :class="{ 'wrong-animate': isPinWrongAnimate === true }">
                    <i class="mr-2 pin-element"
                        :class="{
                          'pin-circle border border-gray rounded-pill bg-light': pin.length === 0,
                          'pin-circle border border-gray rounded-pill bg-gray': pin.length > 0,
                        }"></i>

                    <i class="mr-2 pin-element"
                       :class="{
                          'pin-circle border border-gray rounded-pill bg-light': pin.length < 2,
                          'pin-circle border border-gray rounded-pill bg-gray': pin.length >= 2,
                        }"></i>

                    <i class="mr-2 pin-element"
                       :class="{
                          'pin-circle border border-gray rounded-pill bg-light': pin.length < 3,
                          'pin-circle border border-gray rounded-pill bg-gray': pin.length >= 3,
                        }"></i>

                    <i class="mr-2 pin-element"
                       :class="{
                          'pin-circle border border-gray rounded-pill bg-light': pin.length < 4,
                          'pin-circle border border-gray rounded-pill bg-gray': pin.length >= 4,
                        }"></i>
                  </div>
                </b-col>
              </b-row>
              <b-row align-v="center">
                <template v-for="pinButton in pinButtons">

                  <template v-if="pinButton === 'remove'">
                    <b-col cols="4" class="mb-2 no-padding" :key="pinButton">
                      <button
                          @click="onPinRemove()"
                          :ref="`pinButton_${pinButton}`"
                        class="kbc-button kbc-button-lg btn-pin-clear"
                      >
                        <i class="fal fa-arrow-left"></i>
                      </button>
                    </b-col>
                  </template>

                  <template v-else-if="pinButton === 'c'">
                    <b-col cols="4" class="no-padding mb-2" :key="pinButton">
                      <button
                        @click="onPinClear()"
                        :ref="`pinButton_${pinButton}`"
                        class="kbc-button kbc-button-lg btn-pin"
                      >
                        C
                      </button>
                    </b-col>
                  </template>

                  <template v-else>
                    <b-col cols="4" class="no-padding mb-2" :key="pinButton">
                      <button
                          @click="onPinClick(pinButton)"
                          :ref="`pinButton_${pinButton}`"
                         class="btn-pin kbc-button kbc-button-lg"
                      >
                        {{ pinButton }}
                      </button>
                    </b-col>
                  </template>

                </template>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import PinLogo from '@/components/PinLogo'
import mousetrap from 'mousetrap'

export default {
  components: {
    PinLogo
  },
  data() {
    return {
      pin: '',
      pinButtons : [1,2,3,4,5,6,7,8,9, 'c', 0, 'remove'],
      isPinWrongAnimate: false
    }
  },
  mounted() {
    this.pinToBindKeyBoard()
  },
  destroyed() {
    this.pinToUnbindKeyBoard()
  },
  methods: {
    pinToBindKeyBoard() {
      this.pinButtons.forEach((pin) => {
        const button = this.$refs[`pinButton_${pin}`][0]
        if(pin === 'remove') {
          mousetrap.bind('backspace', this.onPinClickKeyboard(button))
          return
        }
        mousetrap.bind(String(pin), this.onPinClickKeyboard(button))
      })
    },
    pinToUnbindKeyBoard() {
      this.pinButtons.forEach((pin) => {
        if(pin === 'remove') {
          mousetrap.unbind('backspace')
          return
        }
        mousetrap.unbind(String(pin))
      })
    },
    onPinClickKeyboard(button) {
      return async () => {
        button.classList.add('active')
        button.click()
        await this.$timer.pause(100)
        button.classList.remove('active')
      }
    },

    async onPinWrongAnimate() {
      this.isPinWrongAnimate = true
      await this.$timer.pause(900)
      this.isPinWrongAnimate = false
    },

    onPinClick(number) {
      if(this.pin.length < 4) {
        this.pin = this.pin.concat(number)
      }
      if(this.pin.length === 4) {
        this.onPinWrongAnimate()
      }
    },

    onPinRemove() {
      if(this.pin && this.pin.length) {
        this.pin = this.pin.slice(0, -1)
      }
    },

    onPinClear() {
      this.pin = ''
    }
  }
}
</script>
<style scoped lang="scss">
.wrong-animate {
  /* 2 animations: shake, and glow red */
  animation-name: shake, glow-red;
  animation-duration: 1.1s, 0.35s;
  animation-iteration-count: 1, 2;

  .pin-element {
    background-color: #E7524A !important;
    border-color: #E7524A !important;
  }
}

@keyframes shake {
  0%, 20%, 40%, 60%, 80% {
    transform: translateX(8px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-8px);
  }
}

@keyframes glow-red {
  50% {

  }
}
</style>
