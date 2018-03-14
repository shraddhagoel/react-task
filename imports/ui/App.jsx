
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';



import 'react-dropdown/style.css'

const options = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]
const defaultOption = options[0]



export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
                selectedOption: 'Female',
                fullname: '',
                email: '',
                formErrors: {email: '', name: ''},
                emailValid: false,
                fullnameValid: false,
                formValid: false

        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.inputvalid = this.inputvalid.bind(this);
        // this.validateField = this.validateField.bind(this);


    }

    // validate(name,value)
    // {
    //     if 
    // }

    handleOptionChange(e)
    {
        this.setState({
            selectedOption: e.target.value

          },()=>  console.log(this.state.selectedOption));
         

    }

    inputvalid(e)
    {
    let name= e.target.name
    let value= e.target.value
    this.validateField(name, value)
    
    
    this.setState({[name]: value });
    }
   
    validateField(fieldName, value) {
  
        let { emailValid, fullnameValid, formErrors } = this.state
      
        switch(fieldName) {
          case 'email':
            emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
            formErrors.email = emailValid ? '' : 'Invalid Email! Please Check';
             console.log('>>>>>>>>>>>>',emailValid);

            break;
          case 'fullname':
          fullnameValid = (/^[a-z ,.'-]+$/i).test(value);
            formErrors.fullname = fullnameValid ? '': ' Invalid Name! Please Check';
            console.log('>>>>>>>>>>>>',fullnameValid);

            break;
          default:
            break;
        }
        this.setState({formErrors: formErrors,
                        emailValid: emailValid,
                        fullnameValid: fullnameValid,
                        formValid:this.state.emailValid && this.state.fullnameValid
                      });
                      console.log(this.state.emailValid && this.state.fullnameValid);
      }
      

    

    render() {
        return (
            <header><center className="center">
                <h1>FORM</h1>
                <form className="new-task">
                    <input type="text" className="input" name="fullname" placeholder="Name" onChange= {this.inputvalid } value = {this.state.name}/><h6> {this.state.formErrors.fullname} </h6>
                    <input type="text" className="input" name="email" placeholder="Email" onChange= {this.inputvalid } value = {this.state.email} />
                    <h6> {this.state.formErrors.email} </h6>
                    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                    <div className="radio">
                        <label>
                            <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'} onChange={this.handleOptionChange} />
                            Female
          </label>

                        <label>
                            <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'} onChange={this.handleOptionChange} />
                            Male
          </label>
                    </div>


                  
                 <br />   <button type="button" disabled={!this.state.formValid} >Submit</button>

                </form></center>

            </header>
                

        );
    }

}