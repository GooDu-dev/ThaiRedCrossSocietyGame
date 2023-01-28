using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Map", menuName = "Map")]
public class Map : ScriptableObject
{
    public enum Time { None, Morning, Lunch, Evening, Night, Fever };
    public Time time;
    public Sprite ground, background;
}
