	// Float to control player speed
	var playerSpeed : float = 10;

	// Integer to control maximum jump height
	var maxJumpHeight : int = 500;

	var mesh : GameObject;
	var anim : Animator;
	
	public var grounded = false;

	function Start(){
	Debug.Log(mesh.transform.forward.ToString());
	}

	
	// Update is called once per frame
	function Update () {
		// Left movement
		if (Input.GetKey ("a")) {
			if(mesh.transform.forward.x>-1){mesh.transform.forward=Vector3.RotateTowards(mesh.transform.forward,Vector3.left,30*Time.deltaTime,0);}
			transform.position -= Vector3.right * playerSpeed * Time.deltaTime;
			anim.SetFloat("Speed", -1f);
		}
		/*if (Input.GetKeyDown("a")){
			anim.SetFloat("Speed", 1f);
		}*/
		if (Input.GetKeyUp("a")){
			anim.SetFloat("Speed", 0f);
		}
	
		// Right movement
		if (Input.GetKey ("d")) {
			if(mesh.transform.forward.x<1){mesh.transform.forward=Vector3.RotateTowards(mesh.transform.forward,Vector3.right,30*Time.deltaTime,0);}
			transform.position += Vector3.right * playerSpeed * Time.deltaTime;
			anim.SetFloat("Speed", 1f);
		}
		/*if (Input.GetKeyDown("d")){
			anim.SetFloat("Speed", 1f);
		}*/
		if (Input.GetKeyUp("d")){
			anim.SetFloat("Speed", 0f);
		}

		if (Input.GetKey ("d") && Input.GetKey ("a")) {
			anim.SetFloat ("Speed", 0f);
		}
		
		if(Input.GetKeyDown("w")&&grounded){
			rigidbody2D.AddForce(Vector3.up*maxJumpHeight);
			grounded=false;
		}

	}

function OnTriggerEnter2D(col : Collider2D) {
	if(col.gameObject.name=="Floor"){
		grounded=true;
		}
	}