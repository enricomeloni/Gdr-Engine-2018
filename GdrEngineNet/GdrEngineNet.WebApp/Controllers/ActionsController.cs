using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GdrEngineNet.Database;
using GdrEngineNet.Database.Models;
using GdrEngineNet.WebApp.ModelView;

namespace GdrEngineNet.Webapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionsController : ControllerBase
    {
        private readonly GdrDbContext _context;

        public ActionsController(GdrDbContext context)
        {
            _context = context;
        }

        // GET: api/Actions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GameAction>>> GetActions()
        {
            return await _context.Actions.ToListAsync();
        }

        // GET: api/Actions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameAction>> GetGameAction(int id)
        {
            var gameAction = await _context.Actions.FindAsync(id);

            if (gameAction == null)
            {
                return NotFound();
            }

            return gameAction;
        }

        // PUT: api/Actions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGameAction(int id, GameAction gameAction)
        {
            if (id != gameAction.Id)
            {
                return BadRequest();
            }

            _context.Entry(gameAction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameActionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpGet("prova")]
        public async Task<ActionResult<ActionView>> GetActionView()
        {
            var actionView = new ActionView()
            {
                ActionType = "TextAction"
            };

            return actionView;
        }

        // POST: api/Actions
        [HttpPost]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]ActionView actionView)
        {

            var gameAction = actionView.GetGameAction();

            _context.Actions.Add(gameAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = gameAction.Id }, gameAction);
        }

        // DELETE: api/Actions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GameAction>> DeleteGameAction(int id)
        {
            var gameAction = await _context.Actions.FindAsync(id);
            if (gameAction == null)
            {
                return NotFound();
            }

            _context.Actions.Remove(gameAction);
            await _context.SaveChangesAsync();

            return gameAction;
        }

        private bool GameActionExists(int id)
        {
            return _context.Actions.Any(e => e.Id == id);
        }
    }
}
