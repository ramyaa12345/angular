import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { QueryService } from '../service/query.service';

declare let window: any; 


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  public message;
  sendMessage(){
    console.log(this.message)
  }
  

  constructor(private authenticationservice: AuthenticationService,
    private queryservice: QueryService) { }

  ngOnInit(): void {
    
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"3234d55ac5a78ce5678c7ea59bbbda70d","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }

  
}
