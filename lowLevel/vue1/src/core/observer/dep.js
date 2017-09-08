/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'

let uid = 0
 
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {        //  没有发布者消息，订阅者回调，
  static target: ?Watcher;        //  相当于一个订阅中介，许多的观察者对象都可在此处订阅，
  id: number;                     //  没有标示，统一发布
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    //  订阅者列表 - 数组？
    this.subs = []
  }
  //  添加订阅者
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }
  //  移除订阅者
  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }
  //  
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stablize the subscriber list first
    //  订阅者一次添加完，之后不能再添加
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null
const targetStack = []

export function pushTarget (_target: Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget () {
  Dep.target = targetStack.pop()
}
