import { action, makeObservable, observable } from "mobx"

class store {

    stateValue = ''

    constructor() {
        makeObservable(this, {
            stateValue: observable,
            setStateValue: action
        })
    }

    setStateValue(value: any) {
        this.stateValue = value
    }
}

export const demoStore = new store()