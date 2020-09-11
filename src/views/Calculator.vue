<template>
  <div
    id="calculator-view"
    class=" m-5"
  >
    <h1 class="text-center">
      Calculator App
    </h1>

    <div
      id="calculator-container"
      class="bg-green-700 p-5"
    >
      <div
        id="screen"
        class="bg-gray-100 text-center"
      >
        screen
      </div>
      <div
        id="all-buttons-container"
        class="flex items-stretch my-4"
      >
        <div
          id="number-buttons-container"
          class="bg-green-300 flex-grow grid grid-flow-col grid-cols-3 grid-rows-4"
        >
          <button class="hover:bg-green-500">
            7
          </button>
          <button class="hover:bg-green-500">
            4
          </button>
          <button class="hover:bg-green-500">
            1
          </button>
          <button class="hover:bg-green-500">
            0
          </button>
          <button class="hover:bg-green-500">
            8
          </button>
          <button class="hover:bg-green-500">
            5
          </button>
          <button class="hover:bg-green-500">
            2
          </button>
          <button class="hover:bg-green-500">
            .
          </button>  
          <button class="hover:bg-green-500">
            6
          </button>
          <button class="hover:bg-green-500">
            3
          </button>
          <button class="hover:bg-green-500">
            9
          </button>   
        </div>
        <div
          id="function-buttons-container"
          class="bg-purple-400 grid"
        >
          <button class="hover:bg-purple-700 p-5">
            -
          </button>
          <button class="hover:bg-purple-700 p-5">
            +
          </button>
          <button class="hover:bg-purple-700 p-5">
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* #all-buttons-container{
  display:flex;
flex-direction: row;
 }
#number-buttons-container{
  flex-grow:0.8
}
#function-buttons-container{
   flex-grow:0.2
} */

</style>
