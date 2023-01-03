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
