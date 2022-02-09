/*const p =
{
    first: "vvvvv",
    last: "mmmmmmm",
    full: function () {
        return `${this.first} ${this.last}`
    },
    shout: function () {
        setTimeout(function () {
            console.log("settimee call back")
            console.log(this)
            console.log(this.full())
        }, 3000)
    }
}*/

//let a = "huuiuiu"

/*const p =
{
    first: "vvvvv",
    last: "mmmmmmm",
    full: () =>{
        return `${this.first} ${this.last}`
    },
    shout: function () {
        setTimeout(function () {
            console.log("settimee call back")
            console.log(this)
            console.log(this.full())
        }, 3000)
    }
}*/



/*const p =
{
    first: "vvvvv",
    last: "mmmmmmm",
    full: () =>{
        return `${this.first} ${this.last}`
    },
    shout: () =>{
        setTimeout(function () {
            console.log("settimee call back")
            console.log(this)
            console.log(this.full())
        }, 3000)
    }
}*/


const p =
{
    first: "vvvvv",
    last: "mmmmmmm",
    full: function () {
        return `${this.first} ${this.last}`
    },
    shout: function () {
        setTimeout(() => {
            console.log("settimee call back")
            console.log(this)
            console.log(this.full())
        }, 3000)
    }
}










//let a = "huuiuiu"

