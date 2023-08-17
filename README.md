body {
    background-color: #8CC461;
    color: white;
    width: 100%;
}

.score {
    margin: 3em 20em 1em 20em;
    padding: 0px 15px;
    border: 5px solid white;
    border-radius: 10px;
    display: flex;
     
}

.game-heading {
    float: left;
}

.score-right {
    align-items: end;
    display: flex;
    margin: 0px 0px 5px 40px;
}

.score-right div {
    padding: 0px 15px;
    border: 2px solid white;
    border-radius: 20px;
    color: black;
    background-color: aliceblue;
}

.btn {
    text-align: center;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    color: black;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 11px 23px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #2f6627;

}

/* =============================popup============================= */

.header {
    margin-left: 10px;
}

.button {
    background-color: red;
    border: 5px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: azure;
    margin-top: -6%;
    margin-right: -6%;
}

.popup {
    width: 45vh;
    background-color: green;
    /* margin: 10em 0 0 60em   ; */
    position: absolute;
    top: 00em;
    left: 60em;
    transform: scale(0.1);
    padding: 10px;
    border-radius: 10%;
    border: 5px solid white;
    visibility: hidden;
    transition: transform 0.5s, top 0.4s;
}

.open-popup {
    visibility: visible;
    top: 10em;
    transform: scale(1);
}

.popup button {
    float: right;
}

.message ul {
    list-style-type: square green;
}

.rules {
    top: 30em;
    left: 70em;
    position: absolute;

}

/* #won{
    display: flex;
    color: antiquewhite;
    visibility: hidden;
} */
.options {
    align-items: center;
    margin-top: 40px;
}

.options-1 {
    display: flex;
    margin: 0 75vh 0 75vh;
}

.options-2 {
    display: block;
    margin: 0 90.5vh;
}

.option {
    padding: 0 30px 0 30px;
}

img {
    width: 150px;
    height: 150px;
}

/* ------------------------------- */
.won-1 {
    display: flex;
    margin: 9vh;
    margin-left: 70vh;
}

.won-content {
    padding: 20px
}

.mybtn {
    text-align: center;
    border: 5px solid;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 11px 23px;
    text-decoration: none;
    /* text-shadow: 0px -1px 0px #2f6627; */
    background: transparent;


}

#won {
    margin: 50vh;
    visibility: hidden;
    justify-self: auto;
}
#loss {
    margin: 50vh;
    visibility: hidden;
}
#tie {
    margin: 50vh;
    visibility: hidden; 
}

.next {
    margin-left: 160vh;
    padding: 30px 10px 10px 10px;
}
.next-1{
    margin-left: 170vh;
    padding: 30px 10px 10px 10px;
}