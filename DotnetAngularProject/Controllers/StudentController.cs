using DotnetAngularProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAngularProject.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class StudentController : Controller
    {
        private readonly StudentDetailContext _context;
        public StudentController(StudentDetailContext context)
        {
            _context = context;
        }

        [HttpGet("GetStudents")]
        public async Task<ActionResult<List<StudentDetail>>> Get()
        {
            var data = await _context.StudentDetails.OrderByDescending(x=>x.Id).ToListAsync();
            return Ok(data);
        }

        [HttpPost("CreateStudent")]
        public async Task<ActionResult<StudentDetail>> Post(StudentDetail student)
        {
                _context.StudentDetails.Add(student);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(Get), new { id = student.Id }, student);            
        }

        [HttpGet("GetStudent/{id}")]
        public async Task<ActionResult<StudentDetail>> GetStudent(int id)
        {
            var student = await _context.StudentDetails.FindAsync(id);
            if(student == null)
            {
                return NotFound();
            }

            return student;
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Editstudent(int id, StudentDetail student)
        {
            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if(!StudentAvaiable(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(student);

        }

        private bool StudentAvaiable(int id)
        {
            return (_context.StudentDetails?.Any(x => x.Id == id)).GetValueOrDefault();
        }

        [HttpDelete("DeleteStudents/{id}")]
        public async Task<ActionResult<StudentDetail>> Deletestudent(int id)
        {
            var student = _context.StudentDetails.Find(id);
            if(student == null)
            {
                return NotFound();
            }
            _context.StudentDetails.Remove(student);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
