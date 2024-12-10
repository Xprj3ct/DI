use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::UnorderedMap;
use near_sdk::{env, near_bindgen};
use std::collections::HashSet;

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct TokenTracker {
    tokens: UnorderedMap<String, HashSet<String>>, // token name -> set of user accounts
}

impl Default for TokenTracker {
    fn default() -> Self {
        Self { tokens: UnorderedMap::new(b"t".to_vec()) }
    }
}

#[near_bindgen]
impl TokenTracker {
    pub fn name_token(&mut self, token_name: String) {
        let user = env::predecessor_account_id();
        let mut user_set = self.tokens.get(&token_name).unwrap_or_else(HashSet::new);
        user_set.insert(user);
        self.tokens.insert(&token_name, &user_set);
    }

    pub fn get_token_users(&self, token_name: String) -> Vec<String> {
        self.tokens.get(&token_name).map(|s| s.into_iter().collect()).unwrap_or_else(Vec::new)
    }

    pub fn is_token_ready(&self, token_name: String, threshold: usize) -> bool {
        self.tokens.get(&token_name).map(|s| s.len() >= threshold).unwrap_or(false)
    }
}
