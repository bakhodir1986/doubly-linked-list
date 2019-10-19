const Node = require('./node');

class LinkedList {
    constructor() {

        this._tail = null;
        this._head = null;
        this.MyList = [];
        this.length = this.MyList.length;
        this.curPos = -1;
    }

    append(data) {



        if (this.MyList.length === 0) {
            var nodex = new Node(data, null, null);
            this._tail = nodex;
            this._head = nodex;
        } else {
            var nodex = new Node(data, null, this.MyList[this.curPos]);
            this._tail = nodex;
            //this._head = nodex;
        }

        this.curPos = this.curPos + 1
        this.MyList[this.curPos] = nodex
        this.length = this.MyList.length;
    }

    head() {

        if (this._head === null) {
            return null
        }

        return this._head.data;
    }

    tail() {

        if (this._tail === null) {
            return null
        }

        return this._tail.data;
    }

    at(index) {
        return this.MyList[index].data
    }

    insertAt(index, data) {
        if ((this.MyList.length - 1) < index) {

            this.MyList[index] = data;

        } else {

            var nodex = new Node(data, this.MyList[index - 1], this.MyList[index]);
            this.MyList[index - 1].next = nodex;
            this.MyList[index].prev = nodex;

            for (var i = this.MyList.length - 1; i >= index; i--) {
                var nodexx = this.MyList[i];
                this.MyList[i + 1] = nodexx;
            }

            this.MyList[index] = nodex;

        }
    }

    isEmpty() {
        if (this.MyList.length === 0) {
            return true
        }

        return false
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.MyList = [];
        this.length = this.MyList.length;
        this.curPos = -1;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;