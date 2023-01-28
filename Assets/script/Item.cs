using System.Collections;
using System.Collections.Generic;
using UnityEngine;

#if UNITY_EDITOR
using UnityEditor;
#endif

[CreateAssetMenu(fileName = "New Item", menuName = "Item")]
public class Item : ScriptableObject
{
    public Sprite sprite;
    public enum Time { None, Morning, Lunch, Evening, Night, Fever };
    [HideInInspector] public Time time1, time2, time3, time4;
    public enum Item_type { None, Good, Bad }
    public Item_type type;
    public float value;
    [System.NonSerialized] public List<Time> time = new List<Time>();

    [Header("Times")]
    [Range(0,4)]
    public int time_count = 0;

    public List<Time> getTime()
    {
        Time[] all_time = new Time[] { time1, time2, time3, time4 };
        foreach (Time t in all_time)
        {
            if (t != Time.None)
            {
                time.Add(t);
            }
        }
        return time;
    }
    public string getType()
    {
        return type.ToString();
    }
}
#region Editor
#if UNITY_EDITOR
[CustomEditor(typeof(Item))]
public class ItemEditor : Editor
{
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        EditorGUILayout.Space();

        Item item = (Item)target;

        switch (item.time_count) {
            case 1:
                item.time1 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time1);
                item.time2 = Item.Time.None;
                item.time3 = Item.Time.None;
                item.time4 = Item.Time.None;
                break;
            case 2:
                item.time1 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time1);
                item.time2 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time2);
                item.time3 = Item.Time.None;
                item.time4 = Item.Time.None;
                break;
            case 3:
                item.time1 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time1);
                item.time2 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time2);
                item.time3 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time3);
                item.time4 = Item.Time.None;
                break;
            case 4:
                item.time1 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time1);
                item.time2 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time2);
                item.time3 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time3);
                item.time4 = (Item.Time)EditorGUILayout.EnumPopup("Time", item.time4);
                break;
            default:
                item.time1 = Item.Time.None;
                item.time2 = Item.Time.None;
                item.time3 = Item.Time.None;
                item.time4 = Item.Time.None;
                break;
        }
    }
}
#endif
#endregion