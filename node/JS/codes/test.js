function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async task completed');
        }, 2000);
    });
}

function* myGenerator() {
    yield asyncTask();
    yield 'Next step';
    yield Promise.resolve('Another promise');
}

const iterator = myGenerator();

function handleNext(value) {
    const result = iterator.next(value);
    console.log(result)
    if (result.done) {
        return;
    }

    if (result.value instanceof Promise) {
        result.value.then(handleNext);
    } else {
        handleNext(result.value);
    }
}

handleNext();
