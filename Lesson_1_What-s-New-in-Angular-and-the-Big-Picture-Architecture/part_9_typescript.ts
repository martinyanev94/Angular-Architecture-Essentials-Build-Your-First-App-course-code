export class BookComponent {

  constructor(private service: BookService) { }

}



@NgModule({

  imports: [BrowserModule],

  declarations: [AppComponent],

  providers: [BookService],

  bootstrap: [ AppComponent ]

})

export class AppModule { }



@Component({

  providers: [BookService]

}

export class BookComponent { ... }
