using UnityEngine;
using System.Collections;

public class CharController_P1 : MonoBehaviour {

	// Float to control player speed
	public float playerSpeed = 10f;

	// Integer to control maximum jump height
	public int maxJumpHeight = 500;

	Animator anim;

	void Start(){
		anim = GetComponent<Animator> ();
	}

	
	// Update is called once per frame
	void Update () {

		// Left movement
		if (Input.GetKey ("a")) {
			transform.position -= Vector3.right * playerSpeed * Time.deltaTime;
			anim.SetFloat("Speed", 1f);
		}
		/*if (Input.GetKeyDown("a")){
			anim.SetFloat("Speed", 1f);
		}*/
		if (Input.GetKeyUp("a")){
			anim.SetFloat("Speed", 0f);
		}
	
		// Right movement
		if (Input.GetKey ("d")) {
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

	}
}
