using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GdrEngineNet.Database;
using GdrEngineNet.Database.Models;
using GdrEngineNet.WebApp;
using GdrEngineNet.WebApp.ModelView;
using GdrEngineNet.WebApp.Services;

namespace GdrEngineNet.Webapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionsController : ControllerBase
    {
        private readonly GdrDbContext _context;
        private readonly DiceService _diceService;

        public ActionsController(GdrDbContext context, DiceService diceService)
        {
            _context = context;
            _diceService = diceService;
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
        /*[HttpPost]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]GameAction gameAction)
        {
            _context.Actions.Add(gameAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = gameAction.Id }, gameAction);
        }*/

        // POST: api/Actions
        [HttpPost("text")]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]TextAction textAction)
        {
            _context.Actions.Add(textAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = textAction.Id }, textAction);
        }


        [HttpPost("moderator")]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]ModeratorAction moderatorAction)
        {
            _context.Actions.Add(moderatorAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = moderatorAction.Id }, moderatorAction);
        }


        [HttpPost("master")]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]MasterAction masterAction)
        {
            _context.Actions.Add(masterAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = masterAction.Id }, masterAction);
        }


        [HttpPost("dice")]
        public async Task<ActionResult<GameAction>> PostGameAction([FromBody]DiceRequest diceRequest)
        {

            Dice rolledDice = _diceService.GenerateDiceAction(diceRequest.Dice);

            var currentCharacter = _context
                .Characters
                .Include(character => character.Characteristics)
                .First(character => character.Id == diceRequest.CharacterId);

            var characteristic = currentCharacter.Characteristics[diceRequest.Characteristic];

            var diceAction = new DiceAction()
            {
                Bonuses = "",
                CharacterId = diceRequest.CharacterId,
                Result = rolledDice.Result,
                RolledDice = rolledDice.Max,
                CharacteristicValue = characteristic,
                Characteristic = diceRequest.Characteristic,
                RoomId = diceRequest.RoomId
            };

            _context.Actions.Add(diceAction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameAction", new { id = diceAction.Id }, diceAction);
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
