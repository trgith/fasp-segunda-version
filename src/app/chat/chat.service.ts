import { Injectable } from '@angular/core';
import { Chat, UsersChat } from './chat.model';

@Injectable()
export class ChatService {

  constructor() { }

  public chat1: Chat[] = [
    new Chat(
      false,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d',
        'Lorem ipsum dolor sit'
      ]
      , 'text'),
    new Chat(
      false,
      'Hace 30 min',
      [
        'Absolutely!',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.'
      ]
      , 'text'),
    new Chat(
      true,
      'Hace 1 hora',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.',
        'It is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d',
        'Lorem ipsum dolor sit amet?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Lorem ipsum dolor sit amet, '
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.',
        'Lorem ipsum'
      ]
      , 'text'),
  ];
  public chat2: Chat[] = [
    new Chat(
      false,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d',
        'Lorem ipsum dolor sit amet.'
      ]
      , 'text'),
    new Chat(
      false,
      'Hace 40 min',
      [
        'Absolutely!',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ]
      , 'text'),
    new Chat(
      true,
      'Hace 1 hora',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.',
        'Lorem ipsum.'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Lorem ipsum dolor.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat3: Chat[] = [
    new Chat(
      false,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ]
      , 'text'),
    new Chat(
      false,
      'Hace 30 min',
      [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ]
      , 'text'),
    new Chat(
      true,
      'Hace 1 hora',
      [
        'Lorem ipsum dolor sit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thnak.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Thanks.'
      ]
      , 'text'),
  ];
  

  public usersChat: UsersChat[] = [
    {
      userId: "1",
      name: "Isabel",
      avatar: "assets/img/portrait/small/avatar-s-2.png",
      lastChatTime: "9:04 PM",
      status: "online",
      isPinnedUser: true,
      isMuted: false,
      unreadMessageCount: "",
      isActiveChat: false,
      lastChatMessage: "Okay",
      chats: this.chat1
    },
    {
      userId: "2",
      name: "Jesus",
      avatar: "assets/img/portrait/small/avatar-s-7.png",
      lastChatTime: "4:14 AM",
      status: "busy",
      isPinnedUser: false,
      isMuted: false,
      unreadMessageCount: "3",
      isActiveChat: false,
      lastChatMessage: "Thank you",
      chats: this.chat2
    },
    {
      userId: "3",
      name: "Martha",
      avatar: "assets/img/portrait/small/avatar-s-8.png",
      lastChatTime: "2:14 AM",
      status: "away",
      isPinnedUser: false,
      isMuted: true,
      unreadMessageCount: "12",
      isActiveChat: true,
      lastChatMessage: "Hello John!",
      chats: this.chat3
    },
  ]

}
