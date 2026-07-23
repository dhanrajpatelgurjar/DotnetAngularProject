using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DotnetAngularProject.Models;

public partial class StudentDetailContext : DbContext
{
    public StudentDetailContext()
    {
    }

    public StudentDetailContext(DbContextOptions<StudentDetailContext> options)
        : base(options)
    {
    }

    public virtual DbSet<StudentDetail> StudentDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {

        }
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<StudentDetail>(entity =>
        {
            entity.Property(e => e.Date).HasDefaultValueSql("('0001-01-01T00:00:00.0000000')");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
