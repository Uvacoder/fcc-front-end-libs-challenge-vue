<template>
  <div id="calculator-view" class="flex flex-col justify-center h-screen m-5">
    <div id="calculator-container" class="bg-green-700 p-5">
      <div class="bg-gray-100 text-center">
        <span v-if="!valA" id="display">0</span>
        <span v-else id="display">{{ valA }}{{ calcFunction }}{{ valB }}</span>
      </div>
      <div id="all-buttons-container" class="flex items-stretch my-4">
        <div
          id="number-buttons-container"
          class="bg-green-300 flex-grow grid grid-flow-col grid-cols-3 grid-rows-4"
        >
          <button
            id="seven"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '7' })"
          >
            7
          </button>
          <button
            id="four"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '4' })"
          >
            4
          </button>
          <button
            id="one"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '1' })"
          >
            1
          </button>
          <button
            id="zero"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '0' })"
          >
            0
          </button>
          <button
            id="eight"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '8' })"
          >
            8
          </button>
          <button
            id="five"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '5' })"
          >
            5
          </button>
          <button
            id="two"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '2' })"
          >
            2
          </button>
          <button
            id="decimal"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '.' })"
          >
            .
          </button>
          <button
            id="nine"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '9' })"
          >
            9
          </button>
          <button
            id="six"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '6' })"
          >
            6
          </button>
          <button
            id="three"
            class="hover:bg-green-500"
            @click="handleKeyPress({ type: 'NUMBER', value: '3' })"
          >
            3
          </button>
        </div>
        <div id="function-buttons-container" class="bg-purple-400 grid">
          <button
            id="clear"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'FUNCTION', value: 'CLEAR' })"
          >
            CE
          </button>
          <button
            id="subtract"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'FUNCTION', value: '-' })"
          >
            -
          </button>
          <button
            id="add"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'FUNCTION', value: '+' })"
          >
            +
          </button>
          <button
            id="divide"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'FUNCTION', value: '/' })"
          >
            /
          </button>
          <button
            id="multiply"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'FUNCTION', value: '*' })"
          >
            *
          </button>
          <button
            id="equals"
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({ type: 'CALCULATE', value: '=' })"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type calcKey = {
  type: "NUMBER" | "FUNCTION" | "CALCULATE";
  value: string;
};

export default defineComponent({
  name: "Calculator",
  setup() {
    const valA = ref<undefined | string>(undefined);
    const valB = ref<undefined | string>(undefined);
    const calcFunction = ref<undefined | string>(undefined);

    function handleKeyPress(key: calcKey) {
      switch (key.type) {
        case "NUMBER":
          console.log("Number", key.value);
          _handleNumber(key);
          break;
        case "FUNCTION":
          console.log("Function", key.value);
          _handleFunction(key);
          break;
        case "CALCULATE":
          console.log("Calculate", key.value);
          _handleCalculate();
          break;

        default:
          console.log("key.type not recognised");
          break;
      }
    }

    function _handleNumber(key: calcKey) {
      if (calcFunction.value === undefined) {
        if (valA.value === undefined) {
          valA.value = key.value as string;
          return;
        }
        valA.value += key.value as string;
      } else {
        if (valB.value === undefined) {
          valB.value = key.value as string;
          return;
        }
        valB.value += key.value as string;
      }
    }

    function _handleFunction(key: calcKey) {
      if (key.value === "CLEAR") {
        valA.value = "0";
        valB.value = undefined;
        calcFunction.value = undefined;
        return;
      }

      calcFunction.value = key.value;
    }

    function _handleCalculate() {
      if (calcFunction.value === undefined) {
        console.log("can't calculate without a function selected");
        return;
      }
      if (valB.value === undefined) {
        console.log("valB not ready, returning valA");
        calcFunction.value = undefined;
        return;
      }
      const numA = parseFloat(valA.value as string);
      const numB = parseFloat(valB.value as string);

      switch (calcFunction.value) {
        case "-":
          valA.value = String(numA - numB);
          calcFunction.value = undefined;
          valB.value = undefined;
          break;
        case "+":
          valA.value = String(numA + numB);
          calcFunction.value = undefined;
          valB.value = undefined;
          break;
        case "/":
          valA.value = String(numA / numB);
          calcFunction.value = undefined;
          valB.value = undefined;
          break;
        case "*":
          valA.value = String(numA * numB);
          calcFunction.value = undefined;
          valB.value = undefined;
          break;
        default:
          console.log("function not recognised");
          break;
      }
    }
    return {
      handleKeyPress,
      calcFunction,
      valA,
      valB,
    };
  },
});
</script>
