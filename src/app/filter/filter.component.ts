/*
*   Author: Sean O'Brien
*   Create Date: 08/25/2018
*   Modifiy Date: 08/25/2018
*   discription: this control the filter sheet and either filter data what user selected and then they can view them
*/

import { Component } from '@angular/core';

@Component
({
    selector: 'app-filter',
    templateUrl: './filter.component.html'
})

export class FilterComponent
{
    
    maxLimit = 200;
    
    public Open()
    {
        let model = document.getElementById('filter');
        model.className = 'OpenFilterModel';
        model.style.display = 'block';
    }
    Close()
    {
        let model = document.getElementById('filter');
        model.className = 'CloseFilterModel';
        setTimeout(()=>
        {
            model.style.display = 'none';
        },350)
        
    }

    
}