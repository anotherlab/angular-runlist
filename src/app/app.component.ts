import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any =
    [
      {
        "parentName": "School One",
        "childProperties":
          [
            { "propertyName": "Run One" },
            { "propertyName": "Run Two" }
          ]
      },
      {
        "parentName": "School Two",
        "childProperties":
          [
            { "propertyName": "Property Three" },
            { "propertyName": "Property Four" },
            { "propertyName": "Property Five" },
          ]
      },
      {
        "parentName": "School Three",
        "childProperties":
          [
            { "propertyName": "Property Six" },
            { "propertyName": "Property Seven" },
            { "propertyName": "Property Eight" },
          ]
      }
    ];

  locations = [
  {
    "LocationId": 113,
    "LocationName": "Johnson Elementary School",
    "Address": "886 Niagara Falls Blvd North Tonawanda 14120",
     "Runs":  [
       {
         "RunName": "One"
       },
       {
         "RunName": "Two"
       }
       ]
  },
  {
    "LocationId": 118,
    "LocationName": "Central High School",
    "Address": "9 Terry Ln Buffalo 14225",
     "Runs":  [
       {
         "RunName": "One"
       },
       {
         "RunName": "One"
       }
       ]
  },
  {
    "LocationId": 122,
    "LocationName": "N Tonawanda Middle School",
    "Address": "1500 Vanderbilt Ave North Tonawanda 14120",
     "Runs":  [
       {
         "RunName": "One"
       },
       {
         "RunName": "One"
       }
       ]
  }
];

  ngOnInit() {
    
  }
  toggleAccordian(event, index) {
      var element = event.target;
      element.classList.toggle("active");
      if(this.data[index].isActive) {
        this.data[index].isActive = false;
      } else {
        this.data[index].isActive = true;
      }      
      var panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  }

}
