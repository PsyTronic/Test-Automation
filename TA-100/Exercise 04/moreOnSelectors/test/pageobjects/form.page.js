const Page = require("./page");

class FormPage extends Page {
     
     //define selectors using getter methods
     
     get color()
     {
          return $('#color option:nth-child(6)')
     }

     get design()
     {
          return $('#design option:nth-child(3)')
     }

     // Header Selector
     get header() {
          return $('h1=Form Fields'); //uses Element with certain text selector
     }

     // Email Selector
     get inputEmail() {
          return $("#mail"); //uses CSS query selector
     }

     // Error text
    get errorText() {
        return $('.error-text')
    }
     
     // Submit Button Selector
     get submit() {
          return $('button=Register'); //uses Element with certain text selector
     }
     get interest(){
        return $('#title option:nth-child(3)')
     }

     get size()
     {
          return $('#size option:nth-child(3)');
     }

     get paymentType()
     {
          return $('#payment option:nth-child(2)');
     }
     get creditCardInputBox()
     {
          return $('#cc-num');
     }
     get ccZipCode()
     {
         return $('#zip');
     }
     get creditCVV()
     {
          return $('#cvv');
     }
     get expirationMonth()
     {
          return $('#exp-month option:nth-child(12)');
     }
     get expirationYear()
     {
          return $('#exp-year option:nth-child(5)');
     }


     /**
      * a method to encapsule automation code to interact with the page
      * e.g. to login using username and password
      */

      get checkBoxSeven()
      {
          //console.log($('/html/body/div/form/fieldset[3]/label[7]/input'))
          return $('/html/body/div/form/fieldset[3]/label[7]')
      }

     async checkAllBoxes()
     {
          for (let i = 1; i < 8; i++)
          {
              await $('/html/body/div/form/fieldset[3]/label[' + i + ']').waitForClickable({timeout: 5000, timeoutMsg: 'ERROR: Element not clickable!'});
              await $('/html/body/div/form/fieldset[3]/label[' + i + ']').click();
              console.log( $('/html/body/div/form/fieldset[3]/label[' + i + ']'))
          }
     }

     async email(input) {
          await this.inputEmail.setValue(input);
          await this.submit.click();
     }

     get inputName(){
         return $('#name');
     }
     get inputJob()
     {
          return $('//input[@id="other-title"]');
     }

     async jobRole(inputVal)
     {
          const inputBox = await this.inputJob;
          //console.log('text message to verify  code is being run: Step 1 of 3, checking for below code section.')
          /*let j = 1;
          for (let i = 0; i < 5; i++)
          {
               console.log('text message to verify code is being run: Step 2 of 3, repeating')
               if (!(await inputBox.isEnabled()))
               {
                    await inputBox.waitForEnabled({timeout: 500, timeoutMsg:'Element not Enabled!'});
                    j++
               }
               else
               {
                    console.log("Element Enabled");
               }
          }
          console.log('text message to verify code is being run: Step 3 of 3, if step 2 is missing, between code not being run!')
          */
               await inputBox.scrollIntoView();
               await inputBox.waitForEnabled({timeout:500, timeoutMsg: 'Error! element not enabled!'});
               //await inputBox.waitForClickable({timeout: 5000, timeoutMsg: 'ERROR: Element not clickable: Element not intaractable!'});

               //await inputBox.click();
               console.log('the current value is ' + await inputBox.getValue() + ('.'));
               await inputBox.addValue(inputVal);
               console.log('the current value is now ' + await inputBox.getValue() + ('.'));
               //await inputBox.click();
               //console.log("Element not displayed! Element not interactable");  

     }

     async name(input)
     {
         await this.inputName.setValue(input);
         await this.submit.click();
     }

     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
}

module.exports = new FormPage();

