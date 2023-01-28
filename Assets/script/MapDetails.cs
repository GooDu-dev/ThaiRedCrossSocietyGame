using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MapDetails : MonoBehaviour
{
    [SerializeField] private Map map;
    public GameObject ground, background;
    private void Start() 
    {
        // Use this when have ground and background from designer team
        // ground.GetComponent<SpriteRenderer>().sprite = map.ground;
        // background.GetComponent<SpriteRenderer>().sprite = map.background;
        switch (map.time.ToString())
        {
            case "Morning":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = Color.cyan;
                break;
            case "Lunch":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = Color.yellow;
                break;
            case "Evening":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = new Color(0.250f, 0.137f, 0.010f, 1f);
                break;
            case "Night":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = Color.black ;
                break;
            case "Fever":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = new Color(0.153f, 0.217f, 0.234f, 1f);
                break;
            case "None":
                ground.GetComponent<SpriteRenderer>().color = Color.gray;
                background.GetComponent<SpriteRenderer>().color = Color.white;
                break;
        }
    }

    public string getTime()
    {
        return map.time.ToString();
    }

    public float getWidth()
    {
        return ground.GetComponent<SpriteRenderer>().size.x;
    }
    public float getHeight()
    {
        return ground.GetComponent<SpriteRenderer>().size.y+background.GetComponent<SpriteRenderer>().size.y;;
    }
    public float getWorldWidth()
    {
        return ground.GetComponent<SpriteRenderer>().bounds.size.x;
    }
    public float getWorldHeight()
    {
        return ground.GetComponent<SpriteRenderer>().bounds.size.y+background.GetComponent<SpriteRenderer>().bounds.size.y;
    }
    public Vector2 getPosition()
    {
        return gameObject.GetComponent<Transform>().transform.position;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.transform.tag == "groundRemover") Destroy(gameObject);
    }
}
