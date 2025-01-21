package com.shreyam.journalApp.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shreyam.journalApp.entity.JournalEntity;

@RestController
@RequestMapping("/journal")

public class JournalEntryController {

    private Map<Long, JournalEntity> journalEntities = new HashMap<>();

    public JournalEntryController() {
    }
    
    @GetMapping
    public List<JournalEntity> getAll(){
        return new ArrayList<>(journalEntities.values());
    }

    @PostMapping
    public boolean createEntity(@RequestBody JournalEntity myEntity){
        journalEntities.put(myEntity.getId(), myEntity);
        return true;
    }

    @GetMapping("/id/{myId}")
    public JournalEntity getJournalById(@PathVariable Long myId){
        return journalEntities.get(myId);
    }

    @DeleteMapping("/id/{myId}")
    public JournalEntity deleteJournalById(@PathVariable Long myId){
        return journalEntities.remove(myId);
    }

    @PutMapping("/id/{id}")
    public JournalEntity updateJournalById(@PathVariable Long id, @RequestBody JournalEntity myEntity ){
        return journalEntities.put(id, myEntity);
    }
    
}
