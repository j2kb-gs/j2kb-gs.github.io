import React from "react"

const ButtonPannel=()=>{

    return(
        <div class="container" style={{ paddingTop:'15px' }}>
        {/* <!----------------------------->
            <!-- FIRST ROWS OF BUTTONS  -->
            <!-----------------------------> */}
        <div style={{ paddingTop:'15px' }}>
    
          <div class="row">
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" id="deg">DEG</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" id= "fact" name="math">x!</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" name="print">(</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" name="print">)</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" name="print">%</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary btn-lg" type="button" id="clear">AC</button>
            </div>
          </div>
        </div>
    
    
        {/* <!----------------------------->
            <!-- SECOND ROWS OF BUTTONS  -->
            <!-----------------------------> */}
        <div style={{ paddingTop:'15px' }}>
    
          <div class="row">
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="sin" name="math">sin</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="log10" name="math">ln</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">7</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">8</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">9</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary btn-lg" type="button" name="difVal" value="/">{'\u00f7'}</button>
            </div>
          </div>
        </div>
    
    
        {/* <!----------------------------->
            <!-- THIRD ROWS OF BUTTONS  -->
            <!-----------------------------> */}
        <div style={{ paddingTop:'15px' }}>
    
          <div class="row">
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="cos" name="math">cos</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="log" name="math">log</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">4</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">5</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">6</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary btn-lg" type="button" name="difVal" value="*">{'\u00d7'}</button>
            </div>
          </div>
        </div>
    
    
        {/* <!----------------------------->
            <!-- FORTH ROWS OF BUTTONS  -->
            <!-----------------------------> */}
        <div style={{ paddingTop:'15px' }}>
    
          <div class="row">
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="tan" name="math">tan</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="sqrt" name="math">{'\u221A'}</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">1</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">2</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" name="num">3</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary btn-lg" type="button" name="print">-</button>
            </div>
          </div>
        </div>
    
    
        {/* <!----------------------------->
            <!-- FIFTH ROWS OF BUTTONS  -->
            <!-----------------------------> */}
        <div style={{ paddingTop:'15px' }}>
    
          <div class="row">
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" name="math" value="exp">EXP</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary" type="button" value="**" name="pow">x<sup>y</sup></button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button" id= "zero" name="print">0</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-light" type="button"  name="print">.</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-primary" type="button" id="equal">=</button>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
              <button class="btn btn-secondary btn-lg" type="button" name="print">+</button>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default ButtonPannel;