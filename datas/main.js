class UniqueArray{
        constructor(){
            this.data = []
            this.length = 0
        }
        add(item){
            for(let i of this.data)
                if(i == item)
                        return "item already exists"
            this.data[this.length++] = item
        }
        showAll(){
            for(let i of this.data)
                console.log(i)
        }
        exists(item){
            for(let i in this.data)
                if(this.data[i] == item)
                        return true
            return false
        }
        get(index){
            if(index >=0 && index < this.length)
                return this.data[index]
            return -1
        }
    }
    
    const uniqueStuff = new UniqueArray()
    uniqueStuff.add("toy")
    console.log(uniqueStuff.showAll()) //prints ["toy"]
    uniqueStuff.add("toy")
    console.log(uniqueStuff.showAll()) //prints ["toy"]
    console.log(uniqueStuff.exists("toy")) //returns true
    uniqueStuff.add("poster")
    uniqueStuff.add("hydrogen")
    console.log(uniqueStuff.get(2)) //prints "hydrogen"
