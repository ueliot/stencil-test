import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'personal-card',
    //styleUrl: 'personal-card.css',
    styleUrls: ['personal-card.css','common.js'],
    shadow: true
})
export class PersonalCard {

    @Prop() firstName : string = "";
    @Prop() lastName : string =""; 
    @Prop() photo: string ="";
    @Prop() resume: string ="";   
    @Prop() rol: string=""; 
    
    render() {
        return (
            <div class="b-personal-card-box">
                <div class="b-personal-card">
                    <div > 
                     <img class="b-personal-card-photo"
                      src={this.photo} alt=""/>

                    </div>
                    <h2 class="b-personal-card-fullname">
                        {this.firstName} {this.lastName}
                    </h2>
                    <h3 class="b-personal-card-rol">{this.rol}</h3>
                    <div class="b-personal-card-resume">
                    {this.resume}
                    </div>
                </div>
            </div>
        );
    }
}