# This is a library for Debouncer Function

### **Copy** and **Paste** the below code in a module JS file

```
export default class Debouncer {
	constructor(work, delay, targetObject) {
		this.work = work;
		this.delay = delay;
		this.tatargetObject = targetObject;
	}

	deboucerFunction() {
		const functionToExecute = this.work;
		const timeToDelay = this.delay;
		const targetObject = this.tatargetObject;

		let timeoutId;
		return function () {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(() => {
				if (targetObject === undefined) {
					functionToExecute.call(this);
				} else {
					functionToExecute.call(targetObject);
				}
			}, timeToDelay);
		};
	}
}
```

By default the module is exported as **default export**.

Import the the module ```Debouncer``` to the desire file.

```import Debouncer from "[module location]"```


## Using the module

### All the codes here has to be in our main JS file

Create a function that executes the task for the event

```
function taskName(){
    // code goes here
}

```

```
element.addEventListener(event, 
    new Debouncer(
        taskName,
        time,
        targetElement)
    .deboucerFunction()

 ```

- `element` is the element on which the event has to be performed.
- `time` is the amount of time, the event has to wait to perform, time in **milisecond**.
- `targetElement` It is **optional** element, it is the element, for which the task has to perform.