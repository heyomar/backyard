<template>
    <form @submit.prevent="addNewTodo" class="w-full flex font-mono mb-10 md:max-w-screen-md mx-auto md:mt-8 md:px-6">
        <label class="sr-only" for="writeTodo">Enter Task..</label>
        <input
            class="w-full h-28 p-6 font-mono text-2xl shadow-sm md:rounded-l-sm"
            type="text"
            name="writeTodo"
            placeholder="Enter a task.."
            v-model="newTodo"
        />
        <button
            class="bg-yellow-500 hover:bg-yellow-600 hover:text-white font-bold w-36 px-8 text-2xl uppercase text-gray-900 md:rounded-r-sm"
        >Add</button>
    </form>
    <div class="flex flex-col px-6 max-w-screen-md mx-auto mb-24">
        <ul class="mb-10">
            <li v-for="(todo, index) in todos" :key="todo.id" class="flex flex-wrap rounded-sm mb-5">
                <h3
                    :class="{ 'line-through': todo.done }"
                    class="bg-white px-8 py-10 text-2xl font-mono text-black shadow-sm flex-1 rounded-l-sm"
                >{{ todo.todoTitle }}</h3>
                <div class="flex flex-col">
                    <button
                        @click="markDone(todo)"
                        type="button"
                        class="px-5 text-green-500 bg-gray-100 h-full font-bold hover:bg-yellow-600 hover:text-white"
                    >
                        <GetSvg iconName="checkMark"></GetSvg>
                    </button>
                    <button
                        @click="removeTodo(index)"
                        type="button"
                        class="text-red-500 px-5 bg-gray-100 h-full font-bold rounded-r-sm hover:bg-yellow-600 hover:text-white"
                    >
                        <GetSvg iconName="close"></GetSvg>
                    </button>
                </div>
            </li>
        </ul>
        <div class="flex gap-x-4">
            <button
                v-if="todos.length > 1"
                class="font-mono text-grays-900 bg-yellow-500 text-xl font-bold p-6 uppercase rounded-l-md w-full hover:text-white hover:bg-yellow-600"
                type="button"
                @click="markAllComplete"
            >Complete All</button>
            <button
                v-if="todos.length > 1"
                class="font-mono text-grays-900 bg-yellow-500 text-xl font-bold p-6 uppercase rounded-r-md w-full hover:text-white hover:bg-yellow-800"
                type="button"
                @click="removeAllTodos"
            >Remove All</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import GetSvg from './GetSvg.vue'
export default {
    name: 'Todo',
    components: {
        GetSvg
    },

    mounted() {
        if (localStorage.todos) {
            this.todos = JSON.parse(localStorage.todos)
        }
    },
    watch: {
        todos: {
            handler() {
                localStorage.todos = JSON.stringify(this.todos)
            },
            deep: true
        }
    },
    setup() {
        const newTodo = ref('')
        let todos = ref([])

        function getRandomNumber(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }

        function stringGen(length) {
            let text = "";
            let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
            for (let index = 0; index < length; index++)
                text += charset.charAt(Math.floor(Math.random() * charset.length));

            return text.toUpperCase();
        }

        function addNewTodo() {
            if (newTodo.value == '' || null || undefined) {
                return
            } else {
                todos.value.push({
                    id: stringGen(24),
                    todoTitle: newTodo.value,
                    done: false
                })
                newTodo.value = ''
            }
        }

        function removeTodo(index) {
            todos.value.splice(index, 1)
        }

        function markDone(todo) {
            todo.done = !todo.done
        }

        function markAllComplete() {
            todos.value.forEach(todo => todo.done = true)
        }

        function removeAllTodos() {
            todos.value = []
        }

        return {
            newTodo,
            todos,
            addNewTodo,
            removeTodo,
            markDone,
            markAllComplete,
            removeAllTodos
        }
    }
}

</script>
