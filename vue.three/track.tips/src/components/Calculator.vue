<template>
    <h1 class="text-5xl font-bold mb-8 text-green-500 font-sans text-center">Tip Calculator</h1>
    <input class="border p-4 rounded-lg w-full text-3xl mb-6 focus:outline-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
           v-model="bill"
           name="billInput"
           type="number"
           placeholder="Enter Total Bill"
           min="0">
    <div class="space-x-5 flex text-3xl mb-10">
        <button class="border shadow flex-1 py-5 rounded-lg transition hover:bg-green-500 hover:text-white"
                @click="calculateTip($event)"
                type="button"
                value=".10">10%</button>

        <button class="border shadow flex-1 py-5 rounded-lg transition hover:bg-green-500 hover:text-white"
                @click="calculateTip($event)"
                type="button"
                value=".15">15%</button>

        <button class="border shadow flex-1 py-5 rounded-lg transition hover:bg-green-500 hover:text-white"
                @click="calculateTip($event)"
                type="button"
                value=".20">20%</button>

        <button class="border shadow flex-1 py-5 rounded-lg transition hover:bg-green-500 hover:text-white"
                @click="calculateTip($event)"
                type="button"
                value=".25">25%</button>
    </div>
    <div class="space-y-2 font-sans text-gray-400 text-xl">
        <div class="border-b p-2 relative">Bill: <span class="font-bold text-green-500 absolute right-0"> ${{bill}}</span></div>
        <div class="border-b p-2 relative">Percent Tipped: <span class="font-bold text-green-500 font-mono absolute right-0">{{ percent_tipped }}%</span></div>
        <div class="border-b p-2 relative">Tip: <span class="font-bold text-green-500 absolute right-0">${{ tip }}</span>
        </div>
        <div class="border-b p-2 relative">Total: <span class="font-bold text-green-500 absolute right-0">${{ bill_total }}</span></div>
    </div>
</template>

<script>
    export default {
      name: "Calculator",
      props: {},
      data() {
        return {
          bill: null,
          percent_tipped: 0,
          tip: 0,
          bill_total: 0,
        };
      },
      methods: {
        calculateTip(event) {
          this.percent_tipped = 100 * event.target.value;
          this.tip = this.bill * event.target.value;
          this.bill_total = parseInt(this.bill) + this.tip;
        },
      },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
