#pragma strict

function Start () {

}

function Update () {
		if (Input.GetKey (KeyCode.RightArrow))
			rigidbody2D.AddForce(Vector2(1000*Time.deltaTime,0));

}