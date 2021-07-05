<template>
    <h1 class="text-2xl md:text-5xl font-bold mb-8 text-green-500 font-sans text-center">Tip Calculator</h1>
    <div class="relative mb-6">
        <input @change="calculateTip()"
               class="border p-4 pl-8 rounded-lg w-full text-3xl focus:outline-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent font-mono"
               v-model="bill"
               name="billInput"
               type="number"
               placeholder="Enter Total Bill"
               min="0">
        <span class="c-dollar-sign text-3xl">$</span>
    </div>
    <div class="space-y-5 sm:space-x-5 flex text-3xl mb-10 flex-col sm:flex-row sm:space-y-0">
        <button v-for="(item, index) in tip_buttons"
                :key="item.id"
                class="border shadow flex-1 py-5 rounded-lg transition hover:bg-green-500 hover:text-white"
                :class="{ 'bg-green-500 text-white': active_button === index }"
                @click="calculateTip($event), toggleActiveButton(index)"
                type="button"
                :value="item.percent / 100"> {{item.percent}}%
        </button>
    </div>
    <div class="space-y-2 font-sans text-gray-400 text-sm uppercase font-bold">
        <div class="border-b p-2 relative">
            Bill: <span class="text-green-500 absolute right-0 text-xl"> ${{ bill }}</span>
        </div>
        <div class="border-b p-2 relative">
            Percent Tipped: <span class="text-green-500 font-mono absolute right-0 text-xl">{{ percent_tipped }}%</span>
        </div>
        <div class="border-b p-2 relative">
            Tip: <span class="text-green-500 absolute right-0 text-xl">${{ tip }}</span>
        </div>
        <div class="border-b p-2 relative">
            Total: <span class="text-green-500 absolute right-0 text-xl">${{ bill_total }}</span>
        </div>
    </div>
</template>

<script>
    export default {
      name: "Calculator",
      props: {},
      data() {
        return {
          bill: 0,
          percent_tipped: 0,
          tip: 0,
          bill_total: 0,
          active_button: null,
          tip_buttons: [
            { percent: 10 },
            { percent: 15 },
            { percent: 20 },
            { percent: 25 },
          ],
        };
      },
      methods: {
        calculateTip(event) {
          this.percent_tipped = 100 * event.target.value;
          this.tip = parseInt(Math.round(this.bill * event.target.value));

          let calc_bill_total = parseInt(this.bill) + this.tip;
          this.bill_total = Math.round(calc_bill_total);
        },
        toggleActiveButton(button) {
          this.active_button = button;
        },
      },
      mounted() {
        this.$nextTick(() => {
          this.active_button = 1;
          this.bill = 420.69;
        });
      },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .c-dollar-sign {
        top: 48%;
        transform: translateY(-50%);
        left: 15px;
        position: absolute;
        font-family: monospace;
    }
</style>
