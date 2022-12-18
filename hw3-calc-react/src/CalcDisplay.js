import React from "react"

const CalcDisplay=()=>{
  
    return(
        // <!----------------------------->
        // <!-- CARD FOR BUTTON PRESSED -->
        // <!----------------------------->
        <div class="container" style={{ paddingTop:'150px' }}>
          <div class="card" style={{ paddingTop:'20px' }}>
            <div class="card-body" > 
              <input 
                class="form-control form-control-lg" 
                type="text" 
                aria-label=".form-control-lg example" 
                style ={{ border: '0px', textAlign: 'right'}}
                id="oPrint"
                placeholder="0"
                />
            </div>
          </div>
        </div>

    )
}

export default CalcDisplay;