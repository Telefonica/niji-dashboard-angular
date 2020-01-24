import { Component, OnInit } from '@angular/core';
import { ProtectionService } from 'src/app/services/protection.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'niji-threats-list',
  templateUrl: './threats-list.component.html',
  styleUrls: ['./threats-list.component.scss']
})
export class ThreatsListComponent implements OnInit {

  public optionHeight = '54px';
  public panelOpenState;
  public threats = [
    {
      title: 'Septiembre',
      contents: [{
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      },
      {
        icon: './../../assets/global/img/icons/malware.svg',
        description: 'Bloqueo de contenido malicioso en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      }
      ],
    },
    {
      title: 'Agosto',
      expanded: false,
      contents: [{
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      }
      ],
    },
    {
      title: 'Julio',
      expanded: false,
      contents: [{
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      },
      {
        icon: './../../assets/global/img/icons/malware.svg',
        description: 'Bloqueo de contenido malicioso en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      }
      ],
    },
    {
      title: 'Junio',
      expanded: false,
      contents: [{
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      }
      ],
    },
    {
      title: 'Mayo',
      expanded: false,
      contents: [{
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      },
      {
        icon: './../../assets/global/img/icons/malware.svg',
        description: 'Bloqueo de contenido malicioso en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      },
      {
        icon: './../../assets/global/img/icons/phising.svg',
        description: 'Bloqueo de intento de fraude en:',
        name: 'www.nombrewemaliciosa.com',
        date: '16/08/2019 - 18:44'
      },
      ],
    }
  ];

  constructor(
    private protectionService: ProtectionService,
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    if (this.userService.msisdn !== '') {
      this.protectionService.getThreats(this.userService.msisdn)
        .subscribe(response => console.log(response));
    }
  }
}
