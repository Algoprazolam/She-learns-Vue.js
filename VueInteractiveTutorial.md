# She’s learning Vue.js

Vue builds on top of regular HTML, CSS and JS.

It automatically tracks JS changes and updates the DOM accordingly

It extends basic HTML to output HTML based on JS.

# Single-File Components (SFC)

It used HTML like notations in a single .Vue SFC file. This means one file holds HTML, CSS, and the JS all in one.

It’s a reusable, self-contained block of code.

# Which API?

There’s 2 API options. Options API and Composition API. 

Options API is more like your typical OOP language, it tends to be more beginner-friendly by having less abstractive reactivity details and recommended for low-complexity scenarios.

Composition API is more for building big Apps. You need good knowledge about the Reactive state in Vue to use this properly but handles complexity a lot better by reusing logic and more powerful patterns due to the declaring reactive state variables it uses.

I’m going to try Options API due to my OOP knowledge and smaller scale projects, but according to the documentation, knowledge in one translates really well to the other.

# Getting Started

Vue learning documentation allows you to follow a tutorial in their live environment and also supplies you with a bunch of documentation which is very comprehensible.

[https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)

I’m taking the tutorial because I’m a visual and hands-on girlie.

## Step 1, The live tutorial

[https://vuejs.org/tutorial](https://vuejs.org/tutorial)
Make sure to toggle the documentation or this tutorial to Options API in the top left, or otherwise you’ll be writing Composition API code. Composition API is their default setting.

Since I’ve never used Vue’s older versions, I will be going with the default settings

## Step 2, Declarative Rendering and making things Dynamic

You’re presented with your first .Vue file, which is the file a Single-File Component (SFC) is written in as stated before. 

Declarative Rendering is the Core of Vue. using a template syntax that extends HTML, we describe how the HTML should look based on the JS state. When the JS state changes, so does the HTML.

States that trigger updates are considered “Reactive”. The Reactive state is held in a “component”.

Your component can be given multiple options, if you want to declare a reactive state on said component you use the “data” component option. These are basically functions that return an object. 

```jsx
export default {  data() {return {      message: 'Hello World!'    }  }}
```

In the tutorial we use the Message property which is used to render dynamic text based on the value of message. for this, you use something called “Mustaches Syntax”.

```jsx
<h1>{{ message }}</h1> 
//but the content can be extended with any valid JS expression like
<h1>{{ message.split('').reverse().join('') }}</h1>
```

The ‘JS’ and the ‘HTML’ parts in the SFC would look something like this.

```jsx
<script>
export default {
// component options
// declare some reactive state here.
	data() {
		return {
			message: 'Hi I\'\m She'
		}
	}
}
</script>

<template>
	<h1>{{message}}</h1>
</template>
```

This is pretty much just a function that’s reactive (data) so whenever the value of message updates it updates {{message}} in the HTML. Btw, I quickly googled how to escape a character, and it’s 2 backslashed wrapped around your character.

![Untitled](images/Untitled.png)

## Step 3, Attribute Binding

The Mustaches are ONLY used for text interpolation. to bind attributed to a dynamic value, you use the ‘v-bind’ directive. NOTE: v-bind is one-way

```jsx
<div v-bind:id="dynamicId"></div>
<div v-bind:class="dynamicId"></div>
//because v-bind is used so commonly, you can drop it all together 
//because of it’s dedicated shorthand syntax.
<div :id="dynamicId"></div>
<div :class="dynamicId"></div>
```

A directive is a special attribute that starts with a ‘v-’ prefix. They are part of Vue's template syntax. Similar to text interpolations, directive values are JavaScript expressions that have access to the component's state. [https://vuejs.org/guide/essentials/template-syntax.html](https://vuejs.org/guide/essentials/template-syntax.html)

The ‘:id’ or ‘:class’ part after v-bind is the ‘argument’ of the directive. The elements :id attribute will be synced with the ‘dynamicID’ property from the component's state.

So, set up a component with the data component option and we create a titleClass property. With value ‘title’. in style, we call on this class and make the text-color red.

Then you add this dynamic class to the html element and there you go. 

In my silly little brain, it goes something like this.

![Untitled](images/Untitled%201.png)

In case this makes little sense:

![Untitled](images/Untitled%202.png)

Erm okay but why not just add .title to the h1 and call it a day. We’ll sure for here… but now it's super easy to change the class for every h1.

Okay, but why not just rewrite the contents of the .title class if it needs changing? we’ll yes, but what if your css is also used in other pages and don’t want it to change there, or you want to do some javascript stuff to change between classes for animation effects or whatever. it’s all become a lot more manageable and doesn’t require you to go and change it everywhere. 

## Step 4, Event Listeners (yay)

[https://vuejs.org/guide/essentials/event-handling.html](https://vuejs.org/guide/essentials/event-handling.html)

We can listen to DOM events using the `v-on` directive

```jsx
<button v-on:click="increment">{{ count }}</button>
//but same as v-bind this is used a lot so here comes it's shorthand.
<button @click="increment">{{ count }}</button>
//note that you replace both the v-on and the ':'. the shorthand for v-bind was ':'
//which looks like you just dropped the v-bind but its better to think of it as
// ':' being the shorthand for v-bind and '@' for v-on
```

So let’s introduce the ‘method’ component option. 

```jsx
export default {  
	data() {
		return {      
			count: 0    
		}  
	}, 
 methods: {    
	increment() {
		// update component state      
		this.count++    
	 }  
	}
}
```

This is where things get really fancy and will tie a lot of things together we have just learned. so, if you haven’t had your 💡 lightbulb moment yet. hopefully here it comes.

![Untitled](images/Untitled%203.png)

Using “this.” exposes the code to the component instance. Which exposes the ‘data’ properties.

Event handlers can also use inline expressions, see the link at the top of step 4.

So this is what it looks like, and I like experimenting, so I wanted to see if the names really mattered, they don’t

![Untitled](images/Untitled%204.png)

## Step 5: Form Bindings

lets use v-bind and v-on together. This is called Two-way bindings.

```jsx
data() {
    return {
      text: ''
    }
  },
methods: {
  onInput(e) {
    // a v-on handler receives the native DOM event
    // as the argument.
    this.text = e.target.value
  }
}
<template>
<input :value="text" @input="onInput"><p>{{ text }}</p>
</template>
```

![Untitled](images/Untitled%205.png)

kind of a soup! road this if you’re confused about the :value = “text’ in the input. [https://learnvue.co/articles/v-model-guide#the-difference-between-v-model-and-v-bind](https://learnvue.co/articles/v-model-guide#the-difference-between-v-model-and-v-bind)

So what this does, it v-binds the value of this input to ‘text’. and when ‘text’ gets an input, it goes straight to the paragraph underneath it. the ‘e’ is just a target the function needs. to add it to the data option.

To simplify two-way bindings, Vue provides a directive, `v-model`

`v-model` automatically syncs the `<input>`'s value with the bound state, so we no longer need to use an event handler for that.

![Untitled](images/Untitled%206.png)

No v-binding the value to text and no v-on (eventListener) on input.

![Untitled](images/Untitled%207.png)

please read the above-mentioned article in step 5 because it also explains when to use v-bind and v-model etc.

## Step 6, conditional Rendering

[https://vuejs.org/guide/essentials/conditional.html](https://vuejs.org/guide/essentials/conditional.html)

I feel like this doesn’t need much explanation if you have any experience coding.

Show this <h1> when awesome in the data component option = true with v-if =”awesome”

else show the other one with v-else.

the toggle is written to make ‘awesome’ the opposite of itself. so when true it becomes false and vice versa.

![Untitled](images/Untitled%208.png)

## Step 7, List Rendering

[https://vuejs.org/guide/essentials/list.html](https://vuejs.org/guide/essentials/list.html)

v-for directive, your favorite loop. Here it’s explained how to use it by making a list item for each item in an array.

Let’s add items to an on-screen list by adding them to our array, and then it will dynamically appear on the screen

```jsx
//info on all array mutating methods
// https://stackoverflow.com/questions/9009879/which-javascript-array-functions-are-mutating
//you would use them like so in Vue.js
this.todos.push(newTodo)

//alternatively you can replace arrays with new ones to add and items from it
this.todos = this.todos.filter(/* ... */)
```

in this code, the word newTodo was used so often i got confused. so i renamed some things to oo and pp to show what calls for what.

```jsx
<script>
// give each todo a unique id
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(oo) {
      this.todos.splice(this.todos.indexOf(oo), 1)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="pp in todos" :key="pp.id">
      {{ pp.text }}
      <button @click="removeTodo(pp)">X</button>
    </li>
  </ul>
</template>
```

![Untitled](images/Untitled%209.png)

![Untitled](images/Untitled%2010.png)

alternatively, how to remove part of the array

![Untitled](images/Untitled%2011.png)

the hell is the key attribute

[https://vuejs.org/api/built-in-special-attributes.html#key](https://vuejs.org/api/built-in-special-attributes.html#key)

it’s used in a lot of things. the main thing is that it will re-render the item that has a key instead of just patching it. and also for loops that have an order. it’s a bit much to write here, but the link is there.