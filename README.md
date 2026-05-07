# llm-prompt-illuminate
Testing limits of prompt engineering for script search, phrase detection, and language-model-assisted analysis of Hollywood screenplays. This repo starts with a simple prompt test focused on finding the phrase “American Dream” in script text and surfacing the most useful nearby context. 

## Project
Hollywood script prompt test: finding the phrase “American Dream”

## Goal
Build and refine a prompt that helps a language model search screenplay text for:
- exact mentions of the phrase “American Dream”
- close variants or near-matches
- dialogue or scene description surrounding the phrase
- recurring themes tied to ambition, success, class, fame, or disillusionment

## Test prompt

You are helping a film researcher search screenplay text.

Your task:
- Search the provided script text for the phrase “American Dream.”
- Also look for close variations, including references to dreams, success, making it, fame, money, status, and upward mobility.
- Identify whether the match appears in dialogue, action lines, or scene description.
- Return concise findings with only short quoted snippets.
- Do not invent scenes or lines that are not present in the provided text.
- If the phrase does not appear exactly, say so clearly and then list the closest thematic matches.

When I give you screenplay text, respond in this format:

## Query
[repeat the user’s request]

## Exact Matches
- Character / scene / short snippet
- Character / scene / short snippet

## Thematic Matches
- Short note on nearby idea or related wording
- Short note on ambition, fame, money, class, or success language

## Notes
- Mention whether “American Dream” appears exactly or not
- Mention if the script may be incomplete or excerpted
- Keep quotes short
- Be cautious about multiple script drafts or versions

## Example query
Find every use of the phrase “American Dream” in this script and show the nearest useful context.

## Why this matters
This is a small prompt-engineering test for retrieval, evaluation, and text analysis workflows. The idea is to build prompts that are structured, repeatable, and easy to score for quality.

## Next steps
- Compare this prompt against a shorter version
- Test exact-match vs thematic-match behavior
- Score outputs for clarity, precision, and usefulness
- Expand to other screenplay queries such as betrayal, ambition, fame, and Hollywood self-mythology
## Synthetic training data test

This repo also includes a small synthetic instruction-tuning dataset focused on the financial side of Hollywood.

### File
- `hollywood_finance_synthetic_dataset.jsonl`

### What it does
This dataset simulates training examples for a language model that needs to understand entertainment-business language, especially:
- film financing
- profit participation
- pre-sales
- streaming guarantees
- marketing recoupment
- ancillary rights
- slate financing
- compensation structure

### Why it matters
The goal is to show how domain-specific synthetic examples can be created for language-model training and evaluation. In this case, the domain is Hollywood finance: the business logic behind movies, deals, rights, and studio decision-making.





