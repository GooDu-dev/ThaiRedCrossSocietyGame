using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ItemDetails : MonoBehaviour
{
    [SerializeField] private Item item;
    public float item_width, item_height;
    [System.NonSerialized] public string item_type;
    [System.NonSerialized] public float item_value;
    [System.NonSerialized] public SpriteRenderer spriteR;
    [System.NonSerialized] public Transform scale;
    // Start is called before the first frame update
    void Start()
    {
        spriteR = gameObject.GetComponent<SpriteRenderer>();
        scale = gameObject.GetComponent<Transform>();
        spriteR.sprite = item.sprite;
        scale.localScale = new Vector2(item_width, item_height);
        item_type = item.type.ToString();
        item_value = item.value;
    }

    public List<Item.Time> getTime()
    {
        return item.getTime();
    }
}
