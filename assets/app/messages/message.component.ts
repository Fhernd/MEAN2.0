import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * Models
 */
import {
    Message
} from './message.model';

/**
 * Services
 */
import {
    MessageService
} from './message.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService){

    }

    onEdit(){
        this.editClicked.emit('A new value');
    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }
}