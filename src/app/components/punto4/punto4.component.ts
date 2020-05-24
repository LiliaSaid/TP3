import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  palabrasjuego=[
    {
      "categoria":"animal",
      "elementos":[
        { "imagen": "foca.jpg", 'espaniol': "foca", "ingles": "seal"  },
        { "imagen": "leon.jpg", 'espaniol': "leon", "ingles": "leon"},
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "rat" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        { "imagen": "rata.jpg", 'espaniol': "rata", "ingles": "3eqq" },
        
      ]
    }

  ]
  constructor() {
    

   }

  ngOnInit(): void {
  }

}
