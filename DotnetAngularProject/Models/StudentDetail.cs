using System;
using System.Collections.Generic;

namespace DotnetAngularProject.Models;

public partial class StudentDetail
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public bool Complete { get; set; }

    public DateTime Date { get; set; }
}
