class Mormon extends React.Component{
  constructor(props){
    super(props);
    this.state = {mormon: false};
    this.showMormonYes = this.showMormonYes.bind(this);
    this.showMormonNo = this.showMormonNo.bind(this);
    this.showActiveYes = this.showActiveYes.bind(this);
    this.showActiveNo = this.showActiveNo.bind(this);
    this.showTestimonyYes = this.showTestimonyYes.bind(this);
    this.showTestimonyNo = this.showTestimonyNo.bind(this);
  }

  showMormonYes(){
    this.setState({ mormon: 'yes' })
  }

  showMormonNo(){
    this.setState({ mormon: 'no' })
  }

  showActiveYes(){
    this.setState({ active: 'yes' })
  }

  showActiveNo(){
    this.setState({ active: 'no' })
  }

  showTestimonyYes(){
    this.setState({ testimony: 'yes' })
  }

  showTestimonyNo(){
    this.setState({ testimony: 'no' })
  }

  createUser(){

  }

  sendData(){
    // this should send all the data that was collected as the user clicked through the survey
    // are you still mormon? --> this.state.mormon
    // are you still active? --> this.state.active
    // do you have a testimony? --> this.state.testimony
    // $.ajax({
    //   url: '/users',
    //   type: 'POST',
    //   data: { mormon: this.state.mormon, active: this.state.active, testimony: this.state.testimony}
    // }).success( data => {
    // })
  }

  sendReason(){
    $.ajax({
      url: '/users',
      type: 'POST',
      data: {reason: this.refs.notMormonReason}
    }).success( data => {
      
    })
  }

  render(){
    if (this.state.testimony == 'yes') {
      return(<div className='column-container'>
               <h1 className='center'> do you want to make your status public? </h1>
               <h5> making your status public will allow other public users to see your info </h5>
               <br />
               <div className='container'>
                 <button className='button yes-button' onClick={this.showTestimonyYes}>yes</button>
                 <button className='button no-button' onClick={this.showTestimonyNo}>no</button>

               </div>
             </div>)
    } else if (this.state.active) {
      return(<div className='column-container'>
               <h1> do you have a testimony? </h1>
               <br />
               <div className='container'>
                 <button className='button yes-button' onClick={this.showTestimonyYes}>yes</button>
                 <button className='button no-button' onClick={this.showTestimonyNo}>no</button>

               </div>
             </div>)
    } else if (this.state.mormon == 'yes') {
    return(<div className='column-container'>
               <h1> Are You Active? </h1>
               <br />
               <div className='container'>
                 <button className='button yes-button' onClick={this.showActiveYes}>yes</button>
                 <button className='button no-button' onClick={this.showActiveNo}>no</button>

               </div>
             </div>)
    } else if (this.state.mormon == 'no') {
      return(<div className='column-container'>
                 <h1> Why? </h1>
                 <br />
                 <div className='column-container'>
                   <form onSubmit={this.SubmitReason}>
                     <textarea type='textbox' autoFocus='true' ref="notMormonReason"></textarea>
                     <button className="button" type='submit'>submit</button>
                   </form>
                 </div>
               </div>)
    } else {
        return(<div className='column-container'>
                 <h1> Are You Still Mormon??? </h1>
                 <br />
                 <div className='container'>
                   <button className='button yes-button' onClick={this.showMormonYes}>yes</button>
                   <button className='button no-button' onClick={this.showMormonNo}>no</button>

                 </div>
               </div>)
      }
    }

}
