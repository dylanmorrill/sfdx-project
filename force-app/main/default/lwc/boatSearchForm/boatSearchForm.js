 // imports
 import { LightningElement, api, wire } from 'lwc';
 import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';
import Tradestyle from '@salesforce/schema/Account.Tradestyle';
 
 export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';
    
    // Private
    error = undefined;
    
    searchOptions;
    
    // Wire a custom Apex method
    @wire(getBoatTypes)
    boatTypes({ error, data }) {
      if (data) {

        console.log(JSON.stringify(data));

        this.searchOptions = data.map(type => {
            return { label: type.Name, value: type.Id};
        });
        console.log(JSON.stringify(this.searchOptions));
        this.searchOptions.unshift({ label: 'All Types', value: '' });
        console.log('asdf');
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
        console.log('error');
        console.log(error);
      }
    }
    
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
      // Create the const searchEvent
      // searchEvent must be the new custom event search
      //searchEvent;
     // this.dispatchEvent(searchEvent);
     console.log('in method');
    }
  }