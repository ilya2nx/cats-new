import { Injectable, ViewChild } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class Cat {

  objs = [
    {image: 'http://html.ftpes.ru/FrontEndTest/Shironeko.jpg' , name: 'Shironeko', description: 'Самый счастливый и сонный кот в мире', id: 1, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Garfi.jpg', name: 'Garfi', description: 'Самый злой кот в мире', id: 2, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Sam.jpg', name: 'Sam', description: 'У кота Сэма есть потрясающие брови', id: 3, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Snoopy.jpg', name: 'Snoopy', description: 'Самый очаровательный котик', id: 4, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Venus.jpg', name: 'Venus', description: 'Кошка с двумя лицами', id: 5, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Maru.jpg', name: 'Maru', description: 'Повелитель коробок', id: 6, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Lil_Bub.jpg', name: 'Lil Bub', description: 'Вечный котёнок', id: 7, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Banye.jpg', name: 'Banye', description: 'Всегда удивлённый кот', id: 8, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg', name: 'Grumpy Cat', description: 'Сердитый котик', id: 9, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Hamilton.jpg', name: 'Hamilton', description: 'Кот-хипстер', id: 10, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Nala.jpg', name: 'Nala', description: 'Кошка, которая всегда в шоке', id: 11, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg', name: 'Colonel Meow', description: 'Кот с самой длинной шерстью', id: 12, liked: false}
  ]
  toggle = false
  warnings: any = {}
  tempCat: any = {
    name: '',
    image: '',
    description: '',
    id: null,
    liked: false
  }


  onLike(id: any) {
    this.objs.map((el: any) => {
      if (el.id === id) {
        el.liked = !el.liked
      }
    })
  }

  resettempCat() {
    this.tempCat = {
      name: '',
      image: '',
      description: '',
      liked: false
    }
    this.warnings = {}
  }

  onInput(field: string, $event: any) {
    if ($event.target.value === '') this.warnings[field] = true
    else delete this.warnings[field]
  }

  onAdd() {
    const reqFields = ['name', 'image', 'description', ]
    let canPost = true
    for (let field in this.tempCat) {
      if (reqFields.includes(field) && this.tempCat[field].length === 0) {
        this.warnings[field] = true
        canPost = false
      }
    }
    if (canPost && Object.keys(this.tempCat).length !== 0) {
      this.tempCat.id = this.objs.length + 1
      this.objs.push(this.tempCat)   
      this.resettempCat()
    }
  }

  remove(id: number) {
    const index = this.objs.findIndex(el => el.id === id)
    this.objs.splice(index, 1)
  }

  setCurrentCat(id: number) {
    this.tempCat = this.objs.find(el => {
      return el.id === id
    })
  }
  
  onUpdate() {
    this.objs.forEach(el => {
      if( el.id === this.tempCat.id ) {
        el === this.tempCat
      }
    })
  }
}