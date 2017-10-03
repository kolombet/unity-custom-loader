using UnityEngine;
using System.Runtime.InteropServices;

public class StartupPlugin : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void Loaded();

    void Start()
    {
        Loaded();
    }
}