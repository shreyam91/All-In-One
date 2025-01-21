// class Railwayform {
//     constructor(options) {
//         console.log('options')
//     }
//     submit(){
//         alert('The form is submitted.');
//     }
//     cancel(){
//         alert(this.name  + ' The form is cancelled.');
//     }
//     fill(givenName) {
//         this.name = givenName;
//     }
// }

// let monu = new Railwayform();
// monu.fill('Monu')
// let sonu = new Railwayform();
// sonu.fill('Sonu')

// monu.submit();
// sonu.submit();
// sonu.cancel();
       //something changed
class Railwayform {
    constructor(givenName, trainno, address) {
        console.log('Constructor' + givenName + trainno + address);
        this.name = givenName;
        this.trainno = trainno
        this.address = address
    }

    preview(){
        alert(this.name + 'The form with the train number'  + this.trainno + 'submitted.');
    }

    submit(){
        alert(this.name + 'The form is submitted.' + this.trainno);
    }

    cancel(){
        alert(this.name  + ' The form is cancelled.' + this.trainno);
        this.trainno = 0
    }
}

let monuForm = new Railwayform("Monu",12435,"Pune")
monuForm.preview()
monuForm.submit()
