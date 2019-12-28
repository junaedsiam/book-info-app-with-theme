/**
 * Author: Junaed Siam
 * 
 * @param1 name=string of the field
 * @param2 value=value of the field
 * @param3 rules (See the rules section below)
 * @returns object {result:true} for successful validation 
 * @returns object {result:false, message:'validation message'} for unsuccessful validaiton 
 *  ==============
 * RULES
 * =======
 * 'required,min,max,string,number
 * only 5 rules
 * how to use the function 
 */

 /***
  * USAGE
  * ============
  * validate('First Name','John','required|string|min:2|:max:100') //required string with min and max
  * validate('Price','50','number|min:1|:max:100') //optional number with min & maximum
  * 
  * 
  * HAVE FUN!!!!
  */

const validate = (name, value, rules) => {

    const rulesArr = rules.split("|")
    const resultSet = rulesArr.map(rule => {
        const oldRule = rule

        if (rule.startsWith('min') || rule.startsWith('max')) {
            rule = rule.split(':')[0]
        }
        switch (rule) {
            case 'required':
                return value.length > 0 ? {required: true } : {
                    required: false, message: `${name} field is required`
                }
            case 'min':
                if (value === '') return { min: true }
                return (value.length >= parseInt(oldRule.split(':')[1])) ? { min: true } : { min: false, message: `${name} must be minimum ${oldRule.split(':')[1]} character long` }

            case 'max':
                if (value === '') return { max: true }
                return (value.length <= parseInt(oldRule.split(':')[1])) ? { max: true } : { max: false, message: `${name} must be maximum ${oldRule.split(':')[1]} character long` }

            case 'string':
                const regExp = /^[\w .-_,&#@()%;:"'?\u0980-\u09fe]+$/g
                if (value === '') return { string: true }
                return (regExp.test(value)) ? { string: true } : { string: false, message: 'Please type in a valid string' }
            case 'number':
                if (value ==='') {
                    value = 0
                }
                return (typeof parseInt(value) === 'number') ? { number: true } : { number: false, message: 'Please a provide a valid number' }
            default:
                return null
        }
    })

    const index = resultSet.findIndex(result => result[Object.keys(result)[0]] === false)
    if(index!==-1){
        return{
            result:false,
            message:resultSet[index].message
        }
    }

    return{
        result:true
    }

}
export default validate

