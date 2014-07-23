#pragma strict
var Chars : GameObject[];


private var StartingPoint : Vector3;


function Start () {
 StartingPoint = transform.position;

}

function Update () {
transform.position=(Chars[0].transform.position+Chars[1].transform.position+StartingPoint)/3;

}