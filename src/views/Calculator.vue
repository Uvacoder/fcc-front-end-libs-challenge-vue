<template>
  <div
    id="calculator-view"
    class="flex flex-col justify-center h-screen m-5"
  >
    <div
      id="calculator-container"
      class="bg-green-700 p-5"
    >
      <div
        id="screen"
        class="bg-gray-100 text-center"
      >
        {{ screenNumber }}
      </div>
      <div
        id="all-buttons-container"
        class="flex items-stretch my-4"
      >
        <div
          id="number-buttons-container"
          class="bg-green-300 flex-grow grid grid-flow-col grid-cols-3 grid-rows-4"
        >
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '7'})"
          >
            7
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '4'})"
          >
            4
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '1'})"
          >
            1
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '0'})"
          >
            0
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '8'})"
          >
            8
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '5'})"
          >
            5
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '2'})"
          >
            2
          </button>
          <button
            class="hover:bg-green-500"
          >
            .
          </button>  
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '9'})"
          >
            9
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '6'})"
          >
            6
          </button>
          <button
            class="hover:bg-green-500"
            @click="handleKeyPress({type:'NUMBER' , value: '3'})"
          >
            3
          </button>   
        </div>
        <div
          id="function-buttons-container"
          class="bg-purple-400 grid"
        >
          <button 
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({type:'FUNCTION' , value: '-'})"
          >
            -
          </button>
          <button 
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({type:'FUNCTION' , value: '+'})"
          >
            +
          </button>
          <button 
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({type:'FUNCTION' , value: '/'})"
          >
            /
          </button>
          <button 
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({type:'FUNCTION' , value: '*'})"
          >
            *
          </button>
          <button
            class="hover:bg-purple-700 p-5"
            @click="handleKeyPress({type:'CALCULATE' , value: '='})"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"

type calcKey = {
  type: "NUMBER" | "FUNCTION" | "CALCULATE";
  value: string
}

export default {
  setup () {
    const state = reactive({
      screenNumber: 0,
    })

    function handleKeyPress(key: calcKey){
      switch (key.type) {
        case "NUMBER":
          console.log("Number", key.value)
          break;
        case "FUNCTION":
          console.log("Function", key.value)
          break;
        case "CALCULATE":
          console.log("Calculate", key.value)
          break;
         
        default:
          console.log("key.type not recognised")
          break;
      }
    }
  
    return {
      ...toRefs(state),
      handleKeyPress
    }
  }
}
</script>
